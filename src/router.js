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
  });
}
};

module.exports = router;