var fs = require("fs");
//var text = require("../word.txt");
var ac = {};

ac.import = function(callback) {
  if (!callback || typeof callback !== "function") {
    return new Error("callback argument MUST be a function");
  }
  var fileName = __dirname + "/word.txt";
  fs.readFile(fileName, "utf8", function(err, data) {
    return (ac = data.split(".").reduce(function(acc, val) {
      var arr = val.split(" ");
      acc[arr[0]] = arr.slice(1).join(" ");
      return acc;
    }, {}));
  });
};

// var splitfunction = function splitWords(testString) {
//   return testString.split(".").reduce(function(acc, val) {
//     var arr = val.split(" ");
//     acc[arr[0]] = arr.slice(1).join(" ");
//     return acc;
//   }, {});
// };

//module.export = splitfunction
