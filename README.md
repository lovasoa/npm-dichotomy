<a name="dichotomy"></a>

## dichotomy(f, [a], [b]) ⇒ <code>number</code> &#124; <code>Promise.&lt;number&gt;</code>
dichotomy.js
Dichotomy algorithm:
given a function `f : x -> f(x)` and two numbers a, b
find y such that a < y < b and f(y) = 0

**Kind**: global function  
**Returns**: <code>number</code> &#124; <code>Promise.&lt;number&gt;</code> - y, such that f(y) == 0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| f | <code>function</code> |  | a function that takes a number and returns a number or a Promise<Number> |
| [a] | <code>Number</code> | <code>-Number.MAX_VALUE</code> | Start of the search interval |
| [b] | <code>Number</code> | <code>Number.MAX_VALUE</code> | End of the search interval |

**Example**  
```js
dichotomy(x => x*x-2, 0, 10) == Math.sqrt(2)
dichotomy(x => Promise.resolve(x*x-2), 0, 10) == Promise.resolve(Math.sqrt(2))
```
