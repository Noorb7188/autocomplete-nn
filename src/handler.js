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
// function that added the value of the input in to the url
var searchEndpoint = function (val) {
return '/search?+q='+val;
}
// function that filters the keys that starts with the given value - passed tested!
var filterText = function(input) {
return Object.keys(splitWords(text)).filter(function(val){
    return val.startsWith(input);
  })
};


var handlerSearch = function (data) {
return splitWords(data);
}

module.exports = {
  splitWords,
  handlerSearch,
  filterText,
  searchEndpoint
}
