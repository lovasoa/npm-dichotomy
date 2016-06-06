var assert = require("assert");
var dichotomy = require("../dichotomy.js").dichotomy;

assert(typeof dichotomy === "function", "dichotomy is exported");

assert.throws(function() {
    return dichotomy(function(x){return 9}, 0, 1);
}, Error);

function x_square_minus_2(x) {
  return x*x - 2;
}

assert(
    Math.abs(dichotomy(x_square_minus_2) - Math.sqrt(2)) < 1e-6,
    "can compute sqrt(2)");

var promise_square = function (x) {
    return Promise.resolve(x_square_minus_2(x));
}

dichotomy(promise_square)
    .catch(function(err){assert.fail(err)})
