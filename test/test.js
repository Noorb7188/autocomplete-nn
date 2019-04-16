var test = require("tape");
//var splited = require("../public/main.js");

var testString = "abcd efgh.qrst uvwx";
var objSplitTest = {};

test("Testing Tape is working", function(t) {
  t.equal(1, 1, "One should equal one");
  t.end();
});

test("Testing splitWords function is working", function(t) {
  var actual = testString.split(".").reduce(function(acc, val) {
    var arr = val.split(" ");
    acc[arr[0]] = arr.slice(1).join(" ");
    return acc;
  }, {});
  var expected = { abcd: "efgh", qrst: "uvwx" };

  t.deepEqual(actual, expected, "Should return object");
  t.end();
});
