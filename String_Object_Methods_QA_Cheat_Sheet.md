# JavaScript String & Object Methods — QA/Playwright Interview Cheat Sheet

# String Methods

## Common String Methods

| Method / Property | Short description | Mutates original? | Returns | Callback? |
|---|---|:---:|---|:---:|
| `length` | Get number of characters | ❌ No | Number | ❌ |
| `at()` | Get character by index; supports negative indexes | ❌ No | String / `undefined` | ❌ |
| `charAt()` | Get character at index | ❌ No | String | ❌ |
| `charCodeAt()` | Get UTF-16 code of character | ❌ No | Number | ❌ |
| `concat()` | Combine strings | ❌ No | New string | ❌ |
| `includes()` | Check whether substring exists | ❌ No | Boolean | ❌ |
| `indexOf()` | Find first index of substring | ❌ No | Number | ❌ |
| `lastIndexOf()` | Find last index of substring | ❌ No | Number | ❌ |
| `startsWith()` | Check whether string starts with value | ❌ No | Boolean | ❌ |
| `endsWith()` | Check whether string ends with value | ❌ No | Boolean | ❌ |
| `toUpperCase()` | Convert to uppercase | ❌ No | New string | ❌ |
| `toLowerCase()` | Convert to lowercase | ❌ No | New string | ❌ |
| `trim()` | Remove whitespace from both ends | ❌ No | New string | ❌ |
| `trimStart()` | Remove whitespace from start | ❌ No | New string | ❌ |
| `trimEnd()` | Remove whitespace from end | ❌ No | New string | ❌ |
| `replace()` | Replace first matching occurrence | ❌ No | New string | ❌ |
| `replaceAll()` | Replace all matching occurrences | ❌ No | New string | ❌ |
| `slice()` | Extract part of a string | ❌ No | New string | ❌ |
| `substring()` | Extract part of a string | ❌ No | New string | ❌ |
| `split()` | Split string into an array | ❌ No | Array | ❌ |
| `repeat()` | Repeat string specified number of times | ❌ No | New string | ❌ |
| `padStart()` | Pad beginning to target length | ❌ No | New string | ❌ |
| `padEnd()` | Pad end to target length | ❌ No | New string | ❌ |
| `match()` | Find matches using a pattern/regex | ❌ No | Array / `null` | ❌ |
| `matchAll()` | Get all regex matches | ❌ No | Iterator | ❌ |
| `search()` | Find index using regex | ❌ No | Number | ❌ |
| `localeCompare()` | Compare strings for sorting | ❌ No | Number | ❌ |

> Strings are immutable in JavaScript. String methods return a new value rather than changing the original string.

## Important String Pairs

```text
split()        → String → Array
join()         → Array → String

indexOf()      → first matching position
lastIndexOf()  → last matching position

startsWith()   → checks beginning
endsWith()     → checks ending

replace()      → first matching occurrence
replaceAll()   → all matching occurrences

at(-1)         → last character
charAt(-1)     → "" (negative indexes are not supported)
```

## `slice()` vs `substring()`

| | `slice()` | `substring()` |
|---|---|---|
| Negative indexes | ✅ Supported | ❌ Treated as `0` |
| `start > end` | Returns based on direction | Swaps start/end |
| Original string changed? | ❌ | ❌ |

---

# Object Methods

## Common Object Methods

| Method | Short description | Mutates original? | Returns |
|---|---|:---:|---|
| `Object.keys()` | Get object's own enumerable property names | ❌ No | Array |
| `Object.values()` | Get object's own enumerable property values | ❌ No | Array |
| `Object.entries()` | Get key-value pairs | ❌ No | Array |
| `Object.fromEntries()` | Convert key-value pairs into an object | ❌ No | Object |
| `Object.assign()` | Copy/merge properties into a target object | ✅ Yes* | Target object |
| `Object.create()` | Create object with specified prototype | ❌ No | Object |
| `Object.hasOwn()` | Check whether object has its own property | ❌ No | Boolean |
| `Object.getOwnPropertyNames()` | Get own property names, including non-enumerable | ❌ No | Array |
| `Object.getOwnPropertySymbols()` | Get own symbol properties | ❌ No | Array |
| `Object.freeze()` | Prevent changes to object properties | ✅ Yes** | Same object |
| `Object.seal()` | Prevent adding/removing properties | ✅ Yes** | Same object |
| `Object.preventExtensions()` | Prevent adding new properties | ✅ Yes** | Same object |
| `Object.isFrozen()` | Check if object is frozen | ❌ No | Boolean |
| `Object.isSealed()` | Check if object is sealed | ❌ No | Boolean |
| `Object.isExtensible()` | Check if object can have properties added | ❌ No | Boolean |
| `Object.is()` | Compare two values | ❌ No | Boolean |

> `Object.assign()` mutates its **target** object, but source objects are not changed.
>
> `Object.freeze()`, `Object.seal()`, and `Object.preventExtensions()` change the object's state/configuration, so they are marked as mutating operations.

## Most Important Object Methods for QA

### `Object.keys()`

```js
const test = {
    name: "Login",
    status: "PASS",
    duration: 120
};

Object.keys(test);
// ["name", "status", "duration"]
```

### `Object.values()`

```js
Object.values(test);
// ["Login", "PASS", 120]
```

### `Object.entries()`

```js
Object.entries(test);
// [["name", "Login"], ["status", "PASS"], ["duration", 120]]
```

### `Object.assign()`

```js
const defaults = {
    browser: "Chrome",
    timeout: 30000
};

const config = {
    browser: "Firefox"
};

Object.assign(defaults, config);

console.log(defaults);
// { browser: "Firefox", timeout: 30000 }
```

The first argument is the target and is modified.

### `Object.fromEntries()`

```js
const entries = [
    ["browser", "Chrome"],
    ["timeout", 30000]
];

const config = Object.fromEntries(entries);

console.log(config);
// { browser: "Chrome", timeout: 30000 }
```

---

# QA / Playwright Quick Reference

## String Methods to Prioritize

```text
length
trim()
split()
includes()
indexOf()
lastIndexOf()
startsWith()
endsWith()
replace()
replaceAll()
toUpperCase()
toLowerCase()
slice()
substring()
charAt()
at()
```

## Object Methods to Prioritize

```text
Object.keys()
Object.values()
Object.entries()
Object.fromEntries()
Object.assign()
Object.hasOwn()
Object.is()
```

## Useful Conversion Patterns

```text
String → Array
"Login,Search,Logout".split(",")
        ↓
["Login", "Search", "Logout"]

Array → String
["Login", "Search", "Logout"].join(",")
        ↓
"Login,Search,Logout"

Object → Array of keys
Object.keys({ name: "Login", status: "PASS" })
        ↓
["name", "status"]

Object → Array of values
Object.values({ name: "Login", status: "PASS" })
        ↓
["Login", "PASS"]

Object → Array of key/value pairs
Object.entries({ name: "Login", status: "PASS" })
        ↓
[["name", "Login"], ["status", "PASS"]]

Entries → Object
Object.fromEntries([
    ["name", "Login"],
    ["status", "PASS"]
])
        ↓
{ name: "Login", status: "PASS" }
```

# Interview Memory Rules

### Strings

- `split()` → **String → Array**
- `join()` → **Array → String**
- `slice()` → **extract without modifying**
- `substring()` → **extract, but handles negatives differently**
- `trim()` → **remove surrounding whitespace**
- `replace()` → **replace first match**
- `replaceAll()` → **replace all matches**
- `indexOf()` → **first position**
- `lastIndexOf()` → **last position**
- `includes()` → **does it contain this?**
- `startsWith()` → **does it start with this?**
- `endsWith()` → **does it end with this?**
- `at()` → **get character by index, including negative index**

### Objects

- `Object.keys()` → **get keys**
- `Object.values()` → **get values**
- `Object.entries()` → **get key-value pairs**
- `Object.fromEntries()` → **entries → object**
- `Object.assign()` → **copy/merge properties**
- `Object.hasOwn()` → **check own property**
- `Object.is()` → **compare values**

## Example QA Data

```js
const testResult = {
    testName: "Login Test",
    status: "PASS",
    browser: "Chrome",
    duration: 120
};

Object.keys(testResult);
// ["testName", "status", "browser", "duration"]

Object.values(testResult);
// ["Login Test", "PASS", "Chrome", 120]

Object.entries(testResult);
// [
//   ["testName", "Login Test"],
//   ["status", "PASS"],
//   ["browser", "Chrome"],
//   ["duration", 120]
// ]
```
