var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, 'word.txt');
var text = fs.readFileSync(filePath, 'utf-8');
var querystring = require('querystring');

// function that split our txt to object
var splitWords = function(text) {
    return text.split(/\n/).reduce(function(acc, val) {
    var arr = val.split(/\t/);
    acc[arr[0]] = arr.slice(1).join(" ");
    return acc;
  }, {});
};
// i need to conect between the input from the dom to the handler function

// function that filters the keys that starts with the given value - passed tested!
var filterdkeys = function() {
var filtered =  Object.keys(splitWords(text)).filter(function(val){
  console.log(val);
    return val.startsWith("a");
  })
  console.log(filtered);
  return filtered.slice(0, 10);
};

var handlerSearch = function (data) {
return splitWords(data);
}

module.exports = {
  splitWords,
  handlerSearch,
  filterdkeys,
}
