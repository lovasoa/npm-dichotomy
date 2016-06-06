<a name="dichotomy"></a>

## dichotomy(f, a, b) ⇒ <code>number</code> &#124; <code>Promise.&lt;number&gt;</code>
dichotomy.js
Dichotomy algorithm:
given a function f : x -> f(x) and two numbers a, b
find y such that a < y < b and f(y) = 0

**Kind**: global function  
**Returns**: <code>number</code> &#124; <code>Promise.&lt;number&gt;</code> - y, such that f(y) == 0  

| Param | Type | Description |
| --- | --- | --- |
| f | <code>function</code> | a function that takes a number and returns a number or a Promise<Number> |
| a | <code>Number</code> |  |
| b | <code>Number</code> |  |

