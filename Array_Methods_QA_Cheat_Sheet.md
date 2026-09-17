# JavaScript Array Methods — QA/Playwright Interview Cheat Sheet

## JavaScript Array Methods

| Method | Short description | Mutates original? | Returns | Callback? |
|---|---|:---:|---|:---:|
| `push()` | Add item(s) to end | ✅ Yes | New length | ❌ |
| `pop()` | Remove last item | ✅ Yes | Removed item | ❌ |
| `unshift()` | Add item(s) to beginning | ✅ Yes | New length | ❌ |
| `shift()` | Remove first item | ✅ Yes | Removed item | ❌ |
| `splice()` | Add/remove/replace items | ✅ Yes | Removed items | ❌ |
| `sort()` | Sort elements | ✅ Yes | Same array | ❌* |
| `reverse()` | Reverse elements | ✅ Yes | Same array | ❌ |
| `fill()` | Fill elements with a value | ✅ Yes | Same array | ❌ |
| `copyWithin()` | Copy part within the same array | ✅ Yes | Same array | ❌ |
| `map()` | Transform every element | ❌ No | New array | ✅ |
| `filter()` | Select matching elements | ❌ No | New array | ✅ |
| `reduce()` | Combine into one result | ❌ No | Any value | ✅ |
| `reduceRight()` | Reduce from right to left | ❌ No | Any value | ✅ |
| `forEach()` | Perform action on each element | ❌ No | `undefined` | ✅ |
| `find()` | Find first matching element | ❌ No | Element / `undefined` | ✅ |
| `findLast()` | Find last matching element | ❌ No | Element / `undefined` | ✅ |
| `findIndex()` | Find index of first match | ❌ No | Number | ✅ |
| `findLastIndex()` | Find index of last match | ❌ No | Number | ✅ |
| `some()` | Check if at least one matches | ❌ No | Boolean | ✅ |
| `every()` | Check if all match | ❌ No | Boolean | ✅ |
| `includes()` | Check if value exists | ❌ No | Boolean | ❌ |
| `indexOf()` | Find first index of value | ❌ No | Number | ❌ |
| `lastIndexOf()` | Find last index of value | ❌ No | Number | ❌ |
| `slice()` | Extract part of array | ❌ No | New array | ❌ |
| `concat()` | Combine arrays/values | ❌ No | New array | ❌ |
| `join()` | Convert array to string | ❌ No | String | ❌ |
| `flat()` | Flatten nested arrays | ❌ No | New array | ❌ |
| `flatMap()` | Map + flatten one level | ❌ No | New array | ✅ |
| `at()` | Get element by index | ❌ No | Element / `undefined` | ❌ |
| `toReversed()` | Non-mutating reverse | ❌ No | New array | ❌ |
| `toSorted()` | Non-mutating sort | ❌ No | New array | ❌ |
| `toSpliced()` | Non-mutating splice | ❌ No | New array | ❌ |

> `sort()` can take a comparison function, but it is not an iteration callback like `map()`, `filter()`, or `reduce()`.

## Static Array Methods

| Method | Short description | Mutates original? | Returns |
|---|---|:---:|---|
| `Array.isArray()` | Check whether a value is an array | ❌ No | Boolean |
| `Array.from()` | Convert an iterable/array-like value to an array | ❌ No | New array |
| `Array.of()` | Create an array from arguments | ❌ No | New array |

## Must-Know for QA Interviews

### Modify the original array
- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`

### Transform / Process
- `map()`
- `filter()`
- `reduce()`
- `forEach()`

### Search / Check
- `find()`
- `findIndex()`
- `some()`
- `every()`
- `includes()`
- `indexOf()`
- `lastIndexOf()`

### Copy / Extract / Combine
- `slice()`
- `concat()`

### Convert
- `join()` → Array → String
- `split()` → String → Array *(String method, not an Array method)*

## Important Return-Value Distinctions

```text
map()       → Array → Array
filter()    → Array → Array
reduce()    → Array → Any value
forEach()   → Array → undefined
find()      → Array → One element
some()      → Array → true/false
every()     → Array → true/false
```

## Mutation Cheat Sheet

```text
slice()     → ❌ doesn't modify original
splice()    → ✅ modifies original
sort()      → ✅ modifies original
reverse()   → ✅ modifies original
```

## Quick Memory Rules

- `map()` → **transform**
- `filter()` → **select**
- `reduce()` → **combine**
- `forEach()` → **perform an action**
- `find()` → **get the first matching item**
- `some()` → **does at least one match?**
- `every()` → **do all match?**
- `includes()` → **does this value exist?**
- `indexOf()` → **where is the first occurrence?**
- `lastIndexOf()` → **where is the last occurrence?**
- `slice()` → **copy/extract without changing the original**
- `splice()` → **modify the original**
