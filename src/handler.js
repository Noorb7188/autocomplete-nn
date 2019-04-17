var fs = require("fs");
var path = require('path');
var filePath = path.join(__dirname, 'word.txt');
var text = fs.readFileSync(filePath, 'utf-8');

var splitWords = function splitWords(text) {
  return text.split(".").reduce(function(acc, val) {
    var arr = val.split(" ");
    acc[arr[0]] = arr.slice(1).join(" ");
    return acc;
  }, {});
};

module.exports = splitWords;
