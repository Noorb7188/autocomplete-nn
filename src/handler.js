var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, 'word.txt');
var text = fs.readFileSync(filePath, 'utf-8');

// var querystring = require('querystring');
// var q = querystring.parse('search=');
// console.log(q.search);

var splitWords = function(text) {
    return text.split(/\n/).reduce(function(acc, val) {
    var arr = val.split(/\t/);
    acc[arr[0]] = arr.slice(1).join(" ");
    return acc;
  }, {});
};


var handlerSearch = function (data) {
return splitWords(data);
}

module.exports = {
  splitWords,
  handlerSearch,
}
