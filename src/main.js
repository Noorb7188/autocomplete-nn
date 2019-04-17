var fs = require("fs");
var text = require("../word.txt");

var splitWords = function splitWords(text) {
  return text.split(".").reduce(function(acc, val) {
    var arr = val.split(" ");
    acc[arr[0]] = arr.slice(1).join(" ");
    return acc;
  }, {});
};

module.exports = splitWords;
