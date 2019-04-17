var fs = require('fs');
var path = require('path');
var handler = require('./handler');

var router = (request, response) => {
  var url = request.url;
  if (url === '/') {
    var filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (error, file) => {
      if (error) {
      console.log(error);
      response.writeHead(500, { 'Content-Type' : 'text/hmtl' })
      response.end('<h1> Sorry, there is Error</h1>');
    } else {
      response.writeHead(200, { 'Content-Type' : 'text/html' });
      response.end(file);
    }
  })
} else if (url.indexOf('/public/') !== -1) {
  const extension = url.split(".")[1];
    const extensionTypes = {
      html : 'text/html',
      js : 'application/javascript',
      css : 'text/css',
    };
  const filePath = path.join(__dirname, '..', url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { 'Content-Type' : 'text/html' });
      response.end('<h1> So sorry, I can\'t find this file...</h1>');
    } else {
      response.writeHead(200, { 'Content-Type' : extensionTypes[extension]});
      response.end(file);
    }
  });
 } else {
    response.writeHead(404, { 'Content-Type' : 'text/html' });
    response.end('<h1>404 Not Found </h1>');
  }
};

module.exports = router;