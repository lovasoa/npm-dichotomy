var Promise = require("promise");
var assert = require("assert");
var dichotomy = require("../dichotomy.js").dichotomy;

assert(typeof dichotomy === "function", "dichotomy is exported");

assert.throws(function() {
    return dichotomy(function(x){return 9}, 0, 1);
}, Error);

function x_square_minus_2(x) {
  return x*x - 2;
}

function isSqrt2(x) {
    return Math.abs(x - Math.sqrt(2)) < 1e-6;
}

assert(isSqrt2(dichotomy(x_square_minus_2)), "can compute sqrt(2)");

var promise_square = function (x) {
    return Promise.resolve(x_square_minus_2(x));
}

dichotomy(promise_square)
    .then(function(res){assert(isSqrt2(res), "works with promises")})
    .catch(function(err){assert.fail(err)})
