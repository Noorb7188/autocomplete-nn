const fs = require('fs');
const path = require('path');
const url = require('url');
const filePath = path.join(__dirname, 'word.txt');
const text = fs.readFileSync(filePath, 'utf-8');
const querystring = require('querystring');
const request = require('request');

// function that split our txt to object
var splitWords = function(text) {
    return text.split(/\n/).reduce(function(acc, val) {
    var arr = val.split(/\t/);
    acc[arr[0]] = arr.slice(1).join(" ");
    return acc;
  }, {});
};
// function that added the value of the input in to the url
// function that filters the keys that starts with the given value - passed tested!
var filterText = function(input) {
return Object.keys(splitWords(text)).reduce(function (acc, val) {
      if (val.startsWith(input)) {
        acc[val] = (splitWords(text)[val]);
      }
     return acc;
  }, {});
};


var handlerSearch = (req, res) => {
// gave me the fetch url:
const parsedUrl = url.parse(req.url);
// parsed url:
const queryData = parsedUrl.query;
//gave me the quer as [q=value];
const queryValue = querystring.parse(queryData);
// gave me the query as an Object
const value = queryValue.q;
// manipulate the data i want from the my list :
request(text, (err, response, body) => {
  // my list as an object
const parsedtext = splitWords(text);
// my filtred list recording to the value of the input :
const result = filterText(value);
console.log('my filtred data:', filterText(value));
console.log('my value is :', value);
  if (err) {
    res.writeHead(404, {'Content-Type' : 'text/html'});
    res.end('Soory something is wrong');
  } else {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(result);
  }
})
};

module.exports = {
  splitWords,
  handlerSearch,
  filterText
}
