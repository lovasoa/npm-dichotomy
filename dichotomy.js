/**
 * dichotomy.js
 * @author Ophir LOJKINE
 */

/**
 * dichotomy.js
 * Dichotomy algorithm:
 * given a function f : x -> f(x) and two numbers a, b
 * find y such that a < y < b and f(y) = 0
 *
 * @param f {Function} a function that takes a number and returns a number or a Promise<Number>
 * @param a {Number}
 * @param b {Number}
 *
 * @return {number|Promise.<number>} y, such that f(y) == 0
 */
function dichotomy(f, a, b) {
  if (typeof a === "undefined") a = -Number.MAX_VALUE;
  if (typeof b === "undefined") b =  Number.MAX_VALUE;
  var m = (a+b)/2;

  function got_result(fval) {
    if (a===m || b===m) {
      if (Math.abs(fval) > 1e-9)
        throw new Error("dichotomy did not find a valid value in the given interval");
      else return m;
    }
    if (fval > 0) return dichotomy(f, a, m);
    else          return dichotomy(f, m, b);
  }

  var fval = f(m);
  if (typeof fval === "number") {
    return got_result(fval);
  } else {
    return fval.then(got_result);
  }
}

module.exports = {
  "dichotomy": dichotomy
}
