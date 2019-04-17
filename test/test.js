var test = require("tape");
var splitWords = require("../src/handler.js");

var testString = "abcd efgh.qrst uvwx";

test("Testing Tape is working", function(t) {
  t.equal(1, 1, "One should equal one");
  t.end();
});

test("Testing splitWords function is working", function(t) {
  var actual = splitWords(testString);
  var expected = { abcd: "efgh", qrst: "uvwx" };

  t.deepEqual(actual, expected, "Should return object");
  t.end();
});
