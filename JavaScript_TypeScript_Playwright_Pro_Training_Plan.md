# JavaScript & TypeScript for Playwright — Practical, Project-Driven Training

Welcome — this plan helps you move from core JavaScript to a professional Playwright testing workflow using short, hands-on lessons and real scenarios. Each topic is split into bite-sized lessons, quick examples, and practical exercises you can solve in your editor.

Why this works:
- Quick wins first: every lesson lets you run code and verify results immediately.
- Real-world mapping: each exercise ties directly to how you'd use the concept in Playwright tests.
- Flexible pace: learn in 20–120 minute sessions — whichever fits your calendar.

---

## How this guide is structured (fast map)

Each small lesson follows this pattern:

1. Simple explanation — what to remember.
2. Small example — copy/paste and run.
3. Practical Question — short exercise you can do now.
4. Real-world mini-task — a 5–20 minute integration example that shows how this appears in a Playwright test.

Curriculum snapshot: 15 major topics, 284 sub-topics, 568 progressive practical questions.

Estimated effort: ~123 hours total, broken into short hands-on sessions.

- A friendlier view: think of this as 60 practical sessions (~2 hours each) or 120 quick labs (~1 hour each). Pick the cadence that fits your life — consistent small steps beat occasional marathons.

---

## High-level topic & time summary

| # | Topic | Hours |
|---:|---|---:|
| 1 | JavaScript Fundamentals | 2 |
| 2 | JavaScript Data Types | 8 |
| 3 | Operators | 2 |
| 4 | Control Flow and Functions | 8 |
| 5 | Arrays and Array Methods | 14 |
| 6 | Objects and Modern JavaScript | 12 |
| 7 | Advanced JavaScript | 6 |
| 8 | Built-in Utilities for Test Automation | 6 |
| 9 | Asynchronous JavaScript | 10 |
| 10 | JavaScript Modules, Node.js and npm | 6 |
| 11 | TypeScript Fundamentals | 9 |
| 12 | Advanced TypeScript | 10 |
| 13 | TypeScript for Automation | 8 |
| 14 | Playwright Foundations | 12 |
| 15 | Professional Playwright Framework | 10 |
| **Total** | **All topics** | **123** |

---

## Study rhythm suggestions (pick one)

- 2 hours/day — steady progress, best for working professionals.
- 4 hours/day — focused acceleration (weekend sprints help).
- 1–3 short sessions/week — useful for long-term skill retention.

Tip: schedule coding sessions where you actually open an editor and run the examples — that produces far more progress than only reading.

---

## How each lesson looks (concrete example)

Below is a complete lesson template that you can apply repeatedly. The practical questions use colored prompts so they stand out when you read the PDF.

### Lesson: Variables — `let`, `const`, `var`

Simple explanation

Use `let` for values that change, `const` for values that stay the same, and avoid `var` in modern code.

Small example

```javascript
let retries = 0;
retries += 1;

const baseUrl = 'https://example.com';
// baseUrl = 'https://other.com' // throws when reassigned

var legacy = 'ok'; // don't use if you can avoid it
```

<span style="color:#1e88e5;font-weight:700">Practical Question — Concept (blue):</span>

Create a `let` variable named `attempts` set to `0`, then increment it to `1`.

<span style="color:#2e7d32;font-weight:700">Practical Question — Real-World (green):</span>

Declare `const baseUrl = 'https://example.test'` and then create a function that returns a user details URL given an `id` using template literals.

How this maps to Playwright

Use `const` for page locators and configuration values; use `let` for counters and mutable test state.

Real-world mini-task (10–20 minutes)

- Write a quick Playwright script that navigates to a page and stores the page title in a `const`, then logs it. Run the script and verify it prints the title.

---

## Practical question colors (PDF-friendly)

- Concept practice prompts are colored blue: use `#1e88e5`.
- Real-world prompts are colored green: use `#2e7d32`.

These are implemented using lightweight HTML spans which most Markdown→PDF tools (Pandoc, GitHub Pages, wkhtmltopdf) accept. If your converter strips HTML, the text still reads normally — the color is an enhancement, not required.

---

## Example module summaries (real scenarios)

- Arrays: build a small function that aggregates amounts paid by plot owner across months — same logic used in a maintenance-report pipeline.
- Async: write a function that fetches API results and retries on transient errors — directly useful for flaky network calls in E2E tests.
- Playwright: automate login, save screenshots on failure, and run a simple form fill + submit flow.

Each module ends with a short project: connect the pieces (JS + TS + Playwright) by writing a smoke test that asserts a key business flow.

---

## Quick wins and milestones

- After the first 5 lessons you will be able to write simple Playwright tests and run them locally.
- After the TypeScript module you will have a typed test helper library you can reuse across projects.

Celebrate small wins: commit small, runnable tests to a repo and run them automatically.

---

## How to use this file for PDF output

1. If you convert with Pandoc or a similar tool, inline HTML spans for color will usually be preserved.
2. If your converter removes raw HTML, the colored prompts remain readable as plain text.
3. Suggested Pandoc command:

```bash
pandoc JavaScript_TypeScript_Playwright_Pro_Training_Plan.md -o Training_Plan.pdf --pdf-engine=xelatex
```

---

If you want, I can now:

1. Replace all practical-question headings in the file with colored spans consistently.
2. Produce a short PDF-friendly companion with a 1-page quick-start checklist.

Tell me which of the two you'd like next (1 or 2), or I can do both.

#### How this is used later in Playwright

Optional API properties and missing configuration values can be
undefined.

### 2.6 BigInt

#### Simple explanation

`BigInt` represents whole numbers larger than the safe integer range of `Number`. Add `n` to the end of an integer literal.

#### Example

```javascript
const largeId = 9007199254740993n;
```

#### Practical Question 1 --- Concept practice

Create a BigInt value for `9007199254740993`.

#### Practical Question 2 --- Simple QA/real-world practice

Why might BigInt be useful when validating a system that uses extremely large numeric IDs?

#### How this is used later in Playwright

Rare in normal UI automation, but useful when testing APIs or systems that expose very large integer identifiers.

### 2.7 Symbol

#### Simple explanation

`Symbol` creates a unique primitive value. Two Symbols with the same description are still different values.

#### Example

```javascript
const id1 = Symbol("testId");
const id2 = Symbol("testId");
console.log(id1 === id2); // false
```

#### Practical Question 1 --- Concept practice

Create two Symbols with the description `testId` and check whether they are equal.

#### Practical Question 2 --- Simple QA/real-world practice

Why could a unique Symbol be useful when two internal identifiers must never collide?

#### How this is used later in Playwright

Rare in Playwright code, but important to recognize when reading advanced JavaScript or framework code.

### 2.8 Object

#### Simple explanation

An object stores related data as key-value pairs. Arrays, functions, dates, maps, sets, and many other JavaScript structures are objects, although they have their own behavior.

#### Example

```javascript
const user = {
  username: "admin",
  role: "QA"
};
```

#### Practical Question 1 --- Concept practice

Create an object with `username` and `role` properties.

#### Practical Question 2 --- Simple QA/real-world practice

Create a `testCase` object containing a test name and priority.

#### How this is used later in Playwright

Objects are heavily used for test data, configuration, API payloads, fixtures, and page objects.

### 2.9 String Methods — Complete Core Coverage

String methods are important in Playwright because UI text, URLs, API messages, filenames, and test data are all strings.

### 2.9.1 length

#### Simple explanation

`length` is a property, not a method. It returns the number of characters in a string.

#### Example

```javascript
const name = "Playwright";
console.log(name.length);
```

#### Practical Question 1 --- Concept practice

Find the length of `"Login"`.

#### Practical Question 2 --- Simple QA/real-world practice

Check whether a username has more than 20 characters.

#### How this is used later in Playwright

Useful for validating UI/API text and test-data limits.

### 2.9.2 charAt()

#### Simple explanation

Returns the character at a given index.

#### Example

```javascript
const text = "Playwright";
console.log(text.charAt(0));
```

#### Practical Question 1 --- Concept practice

Get the first character of `"Login"`.

#### Practical Question 2 --- Simple QA/real-world practice

Get the first character of a test ID.

#### How this is used later in Playwright

Useful when validating individual characters or prefixes.

### 2.9.3 at()

#### Simple explanation

Returns the character at an index and supports negative indexes.

#### Example

```javascript
const text = "Playwright";
console.log(text.at(-1));
```

#### Practical Question 1 --- Concept practice

Get the last character using `at(-1)`.

#### Practical Question 2 --- Simple QA/real-world practice

Get the last character of a generated test name.

#### How this is used later in Playwright

Useful when you need easy access to the end of text.

### 2.9.4 charCodeAt()

#### Simple explanation

Returns the UTF-16 code unit at an index.

#### Example

```javascript
console.log("A".charCodeAt(0));
```

#### Practical Question 1 --- Concept practice

Find the code of the first character in `"ABC"`.

#### Practical Question 2 --- Simple QA/real-world practice

Check the code of the first character of a generated ID.

#### How this is used later in Playwright

Useful mainly for low-level text validation.

### 2.9.5 codePointAt()

#### Simple explanation

Returns the Unicode code point at an index.

#### Example

```javascript
console.log("😀".codePointAt(0));
```

#### Practical Question 1 --- Concept practice

Get the code point of `"A"`.

#### Practical Question 2 --- Simple QA/real-world practice

Check the code point of a special character in test data.

#### How this is used later in Playwright

Useful for Unicode and internationalization testing.

### 2.9.6 concat()

#### Simple explanation

Joins strings and returns a new string.

#### Example

```javascript
const url = "https://".concat("example.com");
```

#### Practical Question 1 --- Concept practice

Join `"Hello "` and `"World"`.

#### Practical Question 2 --- Simple QA/real-world practice

Build a simple URL from a domain and path.

#### How this is used later in Playwright

Template literals are usually clearer, but concat can appear in older code.

### 2.9.7 includes()

#### Simple explanation

Checks whether a string contains another string.

#### Example

```javascript
"Playwright Test".includes("Test");
```

#### Practical Question 1 --- Concept practice

Check whether `"Login successful"` contains `"successful"`.

#### Practical Question 2 --- Simple QA/real-world practice

Check whether an API message contains `"invalid"`.

#### How this is used later in Playwright

Useful for text assertions and API response checks.

### 2.9.8 startsWith()

#### Simple explanation

Checks whether a string begins with specified text.

#### Example

```javascript
"https://example.com".startsWith("https://");
```

#### Practical Question 1 --- Concept practice

Check whether a URL starts with `https://`.

#### Practical Question 2 --- Simple QA/real-world practice

Check whether a test name starts with `Smoke`.

#### How this is used later in Playwright

Useful for URL, naming, and prefix validation.

### 2.9.9 endsWith()

#### Simple explanation

Checks whether a string ends with specified text.

#### Example

```javascript
"report.html".endsWith(".html");
```

#### Practical Question 1 --- Concept practice

Check whether a filename ends with `.json`.

#### Practical Question 2 --- Simple QA/real-world practice

Check whether a downloaded report ends with `.html`.

#### How this is used later in Playwright

Useful for file and URL validation.

### 2.9.10 indexOf()

#### Simple explanation

Returns the first position of a matching substring, or `-1` when not found.

#### Example

```javascript
"Playwright".indexOf("wright");
```

#### Practical Question 1 --- Concept practice

Find the position of `"@"` in an email.

#### Practical Question 2 --- Simple QA/real-world practice

Check whether an API message contains a word using its index.

#### How this is used later in Playwright

Useful when you need both existence and position.

### 2.9.11 lastIndexOf()

#### Simple explanation

Returns the last position of a matching substring.

#### Example

```javascript
"a/b/c".lastIndexOf("/");
```

#### Practical Question 1 --- Concept practice

Find the last `/` in a URL path.

#### Practical Question 2 --- Simple QA/real-world practice

Find the last `.` in a filename.

#### How this is used later in Playwright

Useful for extracting extensions or final path segments.

### 2.9.12 slice()

#### Simple explanation

Extracts part of a string without changing the original string.

#### Example

```javascript
"Playwright".slice(0, 5);
```

#### Practical Question 1 --- Concept practice

Extract `"Play"` from `"Playwright"`.

#### Practical Question 2 --- Simple QA/real-world practice

Extract the first 10 characters of an API message.

#### How this is used later in Playwright

Useful for trimming displayed text for comparison.

### 2.9.13 substring()

#### Simple explanation

Returns characters between two indexes. Negative values are treated as 0.

#### Example

```javascript
"Playwright".substring(0, 5);
```

#### Practical Question 1 --- Concept practice

Extract `"Play"` from `"Playwright"`.

#### Practical Question 2 --- Simple QA/real-world practice

Extract a portion of a test ID.

#### How this is used later in Playwright

Useful in older code; prefer `slice()` when its negative-index behavior is useful.

### 2.9.14 substr()

#### Simple explanation

Legacy string method for extracting text by start and length. It is deprecated and should not be used in new code.

#### Example

```javascript
"Playwright".substr(0, 5);
```

#### Practical Question 1 --- Concept practice

What does `substr(0, 5)` return?

#### Practical Question 2 --- Simple QA/real-world practice

If you see `substr()` in an old automation project, what modern method would you consider?

#### How this is used later in Playwright

Recognize it in legacy code; use `slice()` or `substring()` in new code.

### 2.9.15 toLowerCase()

#### Simple explanation

Converts a string to lowercase.

#### Example

```javascript
"LOGIN".toLowerCase();
```

#### Practical Question 1 --- Concept practice

Convert `"PASS"` to lowercase.

#### Practical Question 2 --- Simple QA/real-world practice

Normalize an email before comparing it.

#### How this is used later in Playwright

Useful for case-insensitive test-data and text comparisons.

### 2.9.16 toUpperCase()

#### Simple explanation

Converts a string to uppercase.

#### Example

```javascript
"pass".toUpperCase();
```

#### Practical Question 1 --- Concept practice

Convert `"smoke"` to uppercase.

#### Practical Question 2 --- Simple QA/real-world practice

Normalize a status value before comparison.

#### How this is used later in Playwright

Useful for consistent text comparisons.

### 2.9.17 toLocaleLowerCase()

#### Simple explanation

Converts text to lowercase using locale-sensitive rules.

#### Example

```javascript
"I".toLocaleLowerCase("tr");
```

#### Practical Question 1 --- Concept practice

Convert a string to lowercase using the default locale.

#### Practical Question 2 --- Simple QA/real-world practice

Why might locale-aware conversion matter for internationalized applications?

#### How this is used later in Playwright

Useful for internationalization testing.

### 2.9.18 toLocaleUpperCase()

#### Simple explanation

Converts text to uppercase using locale-sensitive rules.

#### Example

```javascript
"i".toLocaleUpperCase("tr");
```

#### Practical Question 1 --- Concept practice

Convert `"qa"` to uppercase using the default locale.

#### Practical Question 2 --- Simple QA/real-world practice

Give one QA scenario where locale-aware casing matters.

#### How this is used later in Playwright

Useful for multilingual UI testing.

### 2.9.19 trim()

#### Simple explanation

Removes whitespace from both ends of a string.

#### Example

```javascript
"  admin  ".trim();
```

#### Practical Question 1 --- Concept practice

Remove leading/trailing spaces from a username.

#### Practical Question 2 --- Simple QA/real-world practice

Clean an API field before comparison.

#### How this is used later in Playwright

Very common when validating UI/API text.

### 2.9.20 trimStart()

#### Simple explanation

Removes whitespace from the beginning of a string.

#### Example

```javascript
"  admin".trimStart();
```

#### Practical Question 1 --- Concept practice

Remove leading spaces from a value.

#### Practical Question 2 --- Simple QA/real-world practice

Clean a field where only leading whitespace is unwanted.

#### How this is used later in Playwright

Useful for precise text normalization.

### 2.9.21 trimEnd()

#### Simple explanation

Removes whitespace from the end of a string.

#### Example

```javascript
"admin  ".trimEnd();
```

#### Practical Question 1 --- Concept practice

Remove trailing spaces from a value.

#### Practical Question 2 --- Simple QA/real-world practice

Clean a text field before an exact assertion.

#### How this is used later in Playwright

Useful when trailing whitespace causes test mismatches.

### 2.9.22 replace()

#### Simple explanation

Replaces the first matching occurrence of text or a pattern.

#### Example

```javascript
"Login failed".replace("failed", "successful");
```

#### Practical Question 1 --- Concept practice

Replace the first `-` in `"QA-Test-01"` with a space.

#### Practical Question 2 --- Simple QA/real-world practice

Replace the first placeholder in a test message.

#### How this is used later in Playwright

Useful for controlled text transformation.

### 2.9.23 replaceAll()

#### Simple explanation

Replaces all matching occurrences of text or a global pattern.

#### Example

```javascript
"a-b-c".replaceAll("-", " ");
```

#### Practical Question 1 --- Concept practice

Replace every `-` with a space.

#### Practical Question 2 --- Simple QA/real-world practice

Normalize all underscores in a generated test name.

#### How this is used later in Playwright

Useful when normalizing repeated separators.

### 2.9.24 split()

#### Simple explanation

Splits a string into an array using a separator.

#### Example

```javascript
"smoke,regression,sanity".split(",");
```

#### Practical Question 1 --- Concept practice

Split a comma-separated string into an array.

#### Practical Question 2 --- Simple QA/real-world practice

Split a URL path using `/`.

#### How this is used later in Playwright

Extremely useful when converting text input into test data arrays.

### 2.9.25 repeat()

#### Simple explanation

Repeats a string a specified number of times.

#### Example

```javascript
"-".repeat(5);
```

#### Practical Question 1 --- Concept practice

Create a string of 10 dashes.

#### Practical Question 2 --- Simple QA/real-world practice

Generate a simple separator for test logging.

#### How this is used later in Playwright

Mostly useful for formatting/debug output.

### 2.9.26 padStart()

#### Simple explanation

Adds characters to the beginning until the string reaches a target length.

#### Example

```javascript
"7".padStart(3, "0");
```

#### Practical Question 1 --- Concept practice

Turn `7` into `007`.

#### Practical Question 2 --- Simple QA/real-world practice

Create IDs such as `TC-007`.

#### How this is used later in Playwright

Useful for generated test IDs and filenames.

### 2.9.27 padEnd()

#### Simple explanation

Adds characters to the end until the string reaches a target length.

#### Example

```javascript
"QA".padEnd(5, ".");
```

#### Practical Question 1 --- Concept practice

Pad `QA` to length 5 with dots.

#### Practical Question 2 --- Simple QA/real-world practice

Format simple test-report output.

#### How this is used later in Playwright

Useful mainly for readable generated output.

### 2.9.28 match()

#### Simple explanation

Returns matches of a string against a regular expression.

#### Example

```javascript
"Order 123".match(/\d+/);
```

#### Practical Question 1 --- Concept practice

Extract digits from `"Order 123"`.

#### Practical Question 2 --- Simple QA/real-world practice

Extract a version number from an API message.

#### How this is used later in Playwright

Useful for text validation and extraction.

### 2.9.29 matchAll()

#### Simple explanation

Returns an iterator containing all matches and their details for a regular expression.

#### Example

```javascript
const matches = [..."A1 B2".matchAll(/([A-Z])(\d)/g)];
```

#### Practical Question 1 --- Concept practice

Find all letter-number pairs in `"A1 B2"`.

#### Practical Question 2 --- Simple QA/real-world practice

Extract all test IDs from a text block.

#### How this is used later in Playwright

Useful for advanced text extraction.

### 2.9.30 search()

#### Simple explanation

Returns the index of the first regular-expression match, or `-1`.

#### Example

```javascript
"Order 123".search(/\d+/);
```

#### Practical Question 1 --- Concept practice

Check whether a string contains digits using a regex.

#### Practical Question 2 --- Simple QA/real-world practice

Check whether an error message contains an error code.

#### How this is used later in Playwright

Useful for pattern-based validation.

### 2.9.31 localeCompare()

#### Simple explanation

Compares two strings according to locale-sensitive sorting rules.

#### Example

```javascript
["b", "a"].sort((a,b) => a.localeCompare(b));
```

#### Practical Question 1 --- Concept practice

Compare `"apple"` and `"banana"`.

#### Practical Question 2 --- Simple QA/real-world practice

Sort test names alphabetically.

#### How this is used later in Playwright

Useful for deterministic text sorting, including localized text.

### 2.9.32 normalize()

#### Simple explanation

Normalizes Unicode text into a standard form.

#### Example

```javascript
const value = "é".normalize("NFC");
```

#### Practical Question 1 --- Concept practice

Normalize a string using NFC.

#### Practical Question 2 --- Simple QA/real-world practice

Why can Unicode normalization matter when comparing translated text?

#### How this is used later in Playwright

Useful for internationalization and Unicode-sensitive assertions.

### 2.9.33 isWellFormed()

#### Simple explanation

Checks whether a string contains well-formed Unicode code units.

#### Example

```javascript
"hello".isWellFormed();
```

#### Practical Question 1 --- Concept practice

Check whether a normal string is well formed.

#### Practical Question 2 --- Simple QA/real-world practice

What kind of test data might make this useful?

#### How this is used later in Playwright

Useful for validating unusual Unicode input.

### 2.9.34 toWellFormed()

#### Simple explanation

Returns a string with lone surrogates replaced by the Unicode replacement character.

#### Example

```javascript
const safe = value.toWellFormed();
```

#### Practical Question 1 --- Concept practice

Convert a string to a well-formed string.

#### Practical Question 2 --- Simple QA/real-world practice

Why could this matter when testing unusual Unicode input?

#### How this is used later in Playwright

Useful for robust internationalization testing.

### 2.9.35 toString()

#### Simple explanation

Returns the string representation of a String object/value. Usually unnecessary for primitive strings.

#### Example

```javascript
const value = String("QA");
console.log(value.toString());
```

#### Practical Question 1 --- Concept practice

Convert a String object/value to its string representation.

#### Practical Question 2 --- Simple QA/real-world practice

What is normally simpler when converting another type to a string?

#### How this is used later in Playwright

Useful when reading older code; prefer `String(value)` for explicit conversion.

### 2.9.36 valueOf()

#### Simple explanation

Returns the primitive string value. It is usually called implicitly.

#### Example

```javascript
const value = new String("QA");
console.log(value.valueOf());
```

#### Practical Question 1 --- Concept practice

Read the primitive value from a String object.

#### Practical Question 2 --- Simple QA/real-world practice

Should you normally need `valueOf()` in everyday test code?

#### How this is used later in Playwright

Mostly a concept to recognize; rarely needed directly.

### 2.9.37 String.fromCharCode()

#### Simple explanation

Static method that creates a string from UTF-16 code units.

#### Example

```javascript
String.fromCharCode(65);
```

#### Practical Question 1 --- Concept practice

Create the character represented by code 65.

#### Practical Question 2 --- Simple QA/real-world practice

Give one testing use for generated character data.

#### How this is used later in Playwright

Useful for low-level character/data generation.

### 2.9.38 String.fromCodePoint()

#### Simple explanation

Static method that creates a string from Unicode code points.

#### Example

```javascript
String.fromCodePoint(0x1F600);
```

#### Practical Question 1 --- Concept practice

Create a string containing a Unicode code point.

#### Practical Question 2 --- Simple QA/real-world practice

Generate an emoji for an internationalization test.

#### How this is used later in Playwright

Useful for Unicode test-data generation.

### 2.9.39 String.raw()

#### Simple explanation

Static method that creates a raw string from a template literal.

#### Example

```javascript
String.raw`C:\test\file.txt`
```

#### Practical Question 1 --- Concept practice

Create a raw string containing backslashes.

#### Practical Question 2 --- Simple QA/real-world practice

Where might raw strings help in automation?

#### How this is used later in Playwright

Useful for paths, regex-like text, and strings where escape processing is inconvenient.

### 2.10 Number Methods — Core Coverage

These methods validate, parse, and format numeric data used in test data, API responses, IDs, timings, and UI values.

### 2.10.1 Number.isFinite()

#### Simple explanation

Checks whether a value is a finite number without coercing other types.

#### Example

```javascript
Number.isFinite(200);
```

#### Practical Question 1 --- Concept practice

Check whether 200 is finite.

#### Practical Question 2 --- Simple QA/real-world practice

Validate an API timeout value before using it.

#### How this is used later in Playwright

Useful for validating numeric test/configuration data.

### 2.10.2 Number.isInteger()

#### Simple explanation

Checks whether a value is an integer.

#### Example

```javascript
Number.isInteger(10);
```

#### Practical Question 1 --- Concept practice

Check whether 10 is an integer.

#### Practical Question 2 --- Simple QA/real-world practice

Validate that a retry count is a whole number.

#### How this is used later in Playwright

Useful for configuration and test-data validation.

### 2.10.3 Number.isNaN()

#### Simple explanation

Checks whether a value is the special `NaN` value.

#### Example

```javascript
Number.isNaN(NaN);
```

#### Practical Question 1 --- Concept practice

Check whether a calculation produced NaN.

#### Practical Question 2 --- Simple QA/real-world practice

Validate that an API field converted to a number successfully.

#### How this is used later in Playwright

Useful when parsing numeric data.

### 2.10.4 Number.isSafeInteger()

#### Simple explanation

Checks whether a value is an integer that can be represented safely.

#### Example

```javascript
Number.isSafeInteger(100);
```

#### Practical Question 1 --- Concept practice

Check whether 100 is a safe integer.

#### Practical Question 2 --- Simple QA/real-world practice

Why might this matter for very large IDs?

#### How this is used later in Playwright

Useful when handling large numeric identifiers.

### 2.10.5 Number.parseInt()

#### Simple explanation

Converts the beginning of a string to an integer using a radix.

#### Example

```javascript
Number.parseInt("42px", 10);
```

#### Practical Question 1 --- Concept practice

Convert `"100"` to an integer.

#### Practical Question 2 --- Simple QA/real-world practice

Convert a CSS pixel value such as `"25px"` to a number.

#### How this is used later in Playwright

Useful for reading numeric values from UI text.

### 2.10.6 Number.parseFloat()

#### Simple explanation

Converts the beginning of a string to a floating-point number.

#### Example

```javascript
Number.parseFloat("12.5px");
```

#### Practical Question 1 --- Concept practice

Convert `"12.5"` to a number.

#### Practical Question 2 --- Simple QA/real-world practice

Read a decimal value from UI/API text.

#### How this is used later in Playwright

Useful for measurements and numeric assertions.

### 2.10.7 toFixed()

#### Simple explanation

Formats a number with a fixed number of decimal places and returns a string.

#### Example

```javascript
const price = 12.5;
price.toFixed(2);
```

#### Practical Question 1 --- Concept practice

Format 12.5 as two decimal places.

#### Practical Question 2 --- Simple QA/real-world practice

Format a price for a UI comparison.

#### How this is used later in Playwright

Useful when comparing formatted currency-like text.

### 2.10.8 toPrecision()

#### Simple explanation

Formats a number to a specified number of significant digits and returns a string.

#### Example

```javascript
(123.456).toPrecision(4);
```

#### Practical Question 1 --- Concept practice

Format 123.456 to four significant digits.

#### Practical Question 2 --- Simple QA/real-world practice

Where might significant digits matter in test data?

#### How this is used later in Playwright

Useful for scientific/measurement-style data.

### 2.10.9 Number.prototype.toString()

#### Simple explanation

Converts a number to a string and can use a radix.

#### Example

```javascript
(255).toString(16);
```

#### Practical Question 1 --- Concept practice

Convert 255 to a string.

#### Practical Question 2 --- Simple QA/real-world practice

Convert an ID number into a string for a URL.

#### How this is used later in Playwright

Useful when building dynamic URLs or test IDs.

### 2.11 typeof and type checking

#### Simple explanation

`typeof` tells you the JavaScript type of a value. It is useful for checking data before using it. Remember that `typeof null` returns `"object"`, which is a historical JavaScript quirk, and arrays also return `"object"`.

#### Example

```javascript
console.log(typeof "hello"); // "string"
console.log(typeof 100);     // "number"
console.log(typeof true);    // "boolean"
```

#### Practical Question 1 --- Concept practice

Use `typeof` to check the types of a string, number, boolean, and undefined value.

#### Practical Question 2 --- Simple QA/real-world practice

Given an API field called `retryCount`, check whether the value received is a number before using it.

#### How this is used later in Playwright

Useful when validating configuration, API responses, and dynamically supplied test data.

### 2.12 Primitive vs object values

#### Simple explanation

JavaScript has primitive values such as strings, numbers, booleans, BigInt, Symbol, `undefined`, and `null`. Objects are reference values. Arrays are objects too, even though they are commonly taught separately.

#### Example

```javascript
const name = "QA";
const user = { role: "Tester" };
const browsers = ["chromium", "firefox"];
```

#### Practical Question 1 --- Concept practice

Identify which of these are primitives and which are objects: `"QA"`, `100`, `true`, `{}`, and `[]`.

#### Practical Question 2 --- Simple QA/real-world practice

Explain why an array of test cases is treated as an object by `typeof`, even though it is normally called an array.

#### How this is used later in Playwright

This distinction helps you understand test-data objects, arrays, fixtures, and how values are passed around in automation code.

## 3. Operators

**Estimated focused time: 2 hours (120 minutes)**

Operators let JavaScript calculate values, compare values, combine conditions, and safely work with optional data.

### 3.1 Arithmetic operators

#### Simple explanation

Arithmetic operators perform calculations. The main operators are `+`, `-`, `*`, `/`, `%`, and `**`.

#### Example

```javascript
const total = 10 * 3;
const remainder = 10 % 3;
const power = 2 ** 3;
```

#### Practical Question 1 — Concept practice

Calculate `250 + 50 - 20`.

#### Practical Question 2 — Simple QA/real-world practice

Calculate the total cost of 3 items at ₹200 each and find the remainder when 17 is divided by 5.

#### How this is used later in Playwright

Used for counts, timings, data generation, and calculations.


### 3.2 Comparison operators

#### Simple explanation

Comparison operators compare values. Prefer strict equality `===` and strict inequality `!==`. Other comparisons include `>`, `<`, `>=`, and `<=`.

#### Example

```javascript
status === "PASS";
statusCode >= 200;
```

#### Practical Question 1 — Concept practice

Check whether `status` is exactly `PASS`.

#### Practical Question 2 — Simple QA/real-world practice

Check whether an API status code is between 200 and 299.

#### How this is used later in Playwright

Used heavily in validations and conditional test logic.


### 3.3 Assignment operators

#### Simple explanation

Assignment operators store or update values. Common forms are `=`, `+=`, `-=`, `*=`, `/=`, and `%=`.

#### Example

```javascript
let retries = 1;
retries += 1;
retries *= 2;
```

#### Practical Question 1 — Concept practice

Start `count` at 5 and increase it by 2 using `+=`.

#### Practical Question 2 — Simple QA/real-world practice

Start a retry counter at 0 and increment it after a failed attempt.

#### How this is used later in Playwright

Useful for counters and values that change during test execution.


### 3.4 Logical AND: &&

#### Simple explanation

`&&` is true only when both conditions are true.

#### Example

```javascript
isLoggedIn && isAdmin;
```

#### Practical Question 1 — Concept practice

Write a condition requiring both `isLoggedIn` and `isAdmin`.

#### Practical Question 2 — Simple QA/real-world practice

Allow an action only when the test is authenticated and the environment is `QA`.

#### How this is used later in Playwright

Useful for combining test preconditions.


### 3.5 Logical OR: ||

#### Simple explanation

`||` is true when at least one condition is true.

#### Example

```javascript
browser === "chromium" || browser === "firefox";
```

#### Practical Question 1 — Concept practice

Allow either `chromium` or `firefox`.

#### Practical Question 2 — Simple QA/real-world practice

Allow a test to run when the tag is either `smoke` or `sanity`.

#### How this is used later in Playwright

Useful for supporting multiple browsers, environments, or test types.


### 3.6 Logical NOT: !

#### Simple explanation

`!` reverses a boolean value.

#### Example

```javascript
!isLoggedIn;
```

#### Practical Question 1 — Concept practice

Write a condition for a user who is not logged in.

#### Practical Question 2 — Simple QA/real-world practice

What is the result of `!true`?

#### How this is used later in Playwright

Useful for negative conditions.


### 3.7 Nullish coalescing: ??

#### Simple explanation

`??` uses the value on the left unless it is `null` or `undefined`, then it uses the value on the right.

#### Example

```javascript
const timeout = config.timeout ?? 30000;
```

#### Practical Question 1 — Concept practice

Set a default value of 30000 when `timeout` is null or undefined.

#### Practical Question 2 — Simple QA/real-world practice

Choose a default API retry count when the configuration does not provide one.

#### How this is used later in Playwright

Useful for optional configuration and test data.


### 3.8 Optional chaining: ?.

#### Simple explanation

Optional chaining safely accesses a property or method when an earlier value may be null or undefined.

#### Example

```javascript
const email = user.profile?.email;
```

#### Practical Question 1 — Concept practice

Safely read `email` from `user.profile`.

#### Practical Question 2 — Simple QA/real-world practice

Read an optional field from an API response without throwing when the parent object is missing.

#### How this is used later in Playwright

Useful when handling optional API/UI data.


### 3.9 Increment and decrement: ++ / --

#### Simple explanation

`++` increases a number by 1 and `--` decreases it by 1.

#### Example

```javascript
let attempt = 1;
attempt++;
attempt--;
```

#### Practical Question 1 — Concept practice

Increase `attempt` by one.

#### Practical Question 2 — Simple QA/real-world practice

Track a retry attempt count using `++`.

#### How this is used later in Playwright

Useful for counters and loops.


## 4. Control Flow and Functions

**Estimated focused time: 8 hours (480 minutes)

### 4.1 if

#### Simple explanation

Use `if` when code should run only when a condition is true.

#### Example

``` javascript
if (status === "PASS") {
  console.log("Continue");
}
```

#### Practical Question 1 --- Concept practice

Print `PASS` when `status` is `PASS`.

#### Practical Question 2 --- Simple QA/real-world practice

Print `Login required` when `isLoggedIn` is false.

#### How this is used later in Playwright

Used for conditional test behavior and validations.

### 4.2 else

#### Simple explanation

`else` runs when the `if` condition is false.

#### Example

``` javascript
if (isCI) {
  console.log("CI");
} else {
  console.log("Local");
}
```

#### Practical Question 1 --- Concept practice

Print `CI` or `Local` based on `isCI`.

#### Practical Question 2 --- Simple QA/real-world practice

Print `Success` when `passed` is true, otherwise print `Failed`.

#### How this is used later in Playwright

Useful when test behavior differs between two cases.

### 4.3 else if

#### Simple explanation

`else if` lets you check another condition when the earlier condition is
false.

#### Example

``` javascript
if (type === "smoke") {
  console.log("Smoke");
} else if (type === "regression") {
  console.log("Regression");
}
```

#### Practical Question 1 --- Concept practice

Handle `smoke`, `regression`, and `sanity` test types.

#### Practical Question 2 --- Simple QA/real-world practice

Print `Chrome`, `Firefox`, or `Other` based on a browser variable.

#### How this is used later in Playwright

Useful for environment/browser/test-type decisions.

### 4.4 Ternary operator

#### Simple explanation

The ternary operator is a short form for a simple two-way choice.

#### Example

``` javascript
const timeout = isCI ? 30000 : 10000;
```

#### Practical Question 1 --- Concept practice

Set `timeout` to 30000 in CI and 10000 otherwise.

#### Practical Question 2 --- Simple QA/real-world practice

Create `result` as `"PASS"` if `passed` is true, otherwise `"FAIL"`.

#### How this is used later in Playwright

Useful for short configuration choices.

### 4.5 for loop

#### Simple explanation

A `for` loop repeats code using a counter.

#### Example

``` javascript
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```

#### Practical Question 1 --- Concept practice

Print numbers 1, 2, and 3.

#### Practical Question 2 --- Simple QA/real-world practice

Print `Attempt 1` through `Attempt 3`.

#### How this is used later in Playwright

Useful for repeated setup, data, or attempts.

### 4.6 while loop

#### Simple explanation

A `while` loop repeats while a condition remains true.

#### Example

``` javascript
let count = 0;
while (count < 3) {
  count++;
}
```

#### Practical Question 1 --- Concept practice

Repeat until `count` reaches 3.

#### Practical Question 2 --- Simple QA/real-world practice

Print values 1 through 5 using a while loop.

#### How this is used later in Playwright

Useful when the number of repetitions depends on a condition.

### 4.7 for...of

#### Simple explanation

`for...of` processes each value in an array or other iterable.

#### Example

``` javascript
const browsers = ["chromium", "firefox"];
for (const browser of browsers) {
  console.log(browser);
}
```

#### Practical Question 1 --- Concept practice

Print every browser in `browsers`.

#### Practical Question 2 --- Simple QA/real-world practice

Print every test name in `tests`.

#### How this is used later in Playwright

Useful for test data and browser/data-driven execution.

### 4.8 for...in

#### Simple explanation

`for...in` iterates over object keys.

#### Example

``` javascript
const user = { name: "A", role: "QA" };
for (const key in user) {
  console.log(key);
}
```

#### Practical Question 1 --- Concept practice

Print the keys of a user object.

#### Practical Question 2 --- Simple QA/real-world practice

Use a key to read its value from the object.

#### How this is used later in Playwright

Can be useful when dynamically inspecting object fields.

### 4.9 Function declaration

#### Simple explanation

A function groups reusable logic.

#### Example

``` javascript
function add(a, b) {
  return a + b;
}
```

#### Practical Question 1 --- Concept practice

Create a function named `greet` that prints `Hello`.

#### Practical Question 2 --- Simple QA/real-world practice

Create a function named `add` that returns the sum of two numbers.

#### How this is used later in Playwright

Functions become the foundation for reusable automation helpers.

### 4.10 Function parameters

#### Simple explanation

Parameters allow a function to receive values.

#### Example

``` javascript
function login(username, password) {
  console.log(username);
}
```

#### Practical Question 1 --- Concept practice

Create a `login` function with `username` and `password` parameters.

#### Practical Question 2 --- Simple QA/real-world practice

Create a function accepting a browser name and printing it.

#### How this is used later in Playwright

Playwright helpers commonly accept page objects, data, or options.

### 4.11 return

#### Simple explanation

`return` sends a value back to the caller.

#### Example

``` javascript
function getStatus() {
  return 200;
}
```

#### Practical Question 1 --- Concept practice

Create a function that returns `"PASS"`.

#### Practical Question 2 --- Simple QA/real-world practice

Call a function returning 200 and store the result in `status`.

#### How this is used later in Playwright

Reusable helpers often return data or results.

### 4.12 Arrow functions

#### Simple explanation

Arrow functions provide shorter function syntax and are common in modern
JavaScript.

#### Example

``` javascript
const add = (a, b) => a + b;
```

#### Practical Question 1 --- Concept practice

Convert a simple add function into an arrow function.

#### Practical Question 2 --- Simple QA/real-world practice

Create an arrow function that doubles a number.

#### How this is used later in Playwright

Arrow functions appear throughout Playwright and array methods.

## 5. Arrays and Array Methods

**Estimated focused time: 14 hours (840 minutes)**

Arrays are a major part of test-data handling. Every core/current Array method in this section is explained individually.

### 5.1 Arrays

#### Simple explanation

An array stores multiple values in one variable.

#### Example

```javascript
const browsers = ["chromium", "firefox", "webkit"];
```

#### Practical Question 1 --- Concept practice

Create an array containing `smoke`, `regression`, and `sanity`.

#### Practical Question 2 --- Simple QA/real-world practice

Read the first item from a browser array.

#### How this is used later in Playwright

Test data, browser lists, and API results are commonly arrays.

### 5.2 Array Methods

### 5.2.1 at()

#### Simple explanation

Returns the item at an index and supports negative indexes.

#### Example

```javascript
const items = ["a", "b", "c"];
items.at(-1);
```

#### Practical Question 1 --- Concept practice

Get the last item using `at(-1)`.

#### Practical Question 2 --- Simple QA/real-world practice

Get the last browser from a browser list.

#### How this is used later in Playwright

Useful when accessing the first/last test-data item.

### 5.2.2 concat()

#### Simple explanation

Combines arrays and/or values into a new array.

#### Example

```javascript
[1, 2].concat([3, 4]);
```

#### Practical Question 1 --- Concept practice

Combine `[1,2]` and `[3,4]`.

#### Practical Question 2 --- Simple QA/real-world practice

Combine smoke and regression test-data arrays.

#### How this is used later in Playwright

Useful for composing test-data sets.

### 5.2.3 copyWithin()

#### Simple explanation

Copies part of an array to another position within the same array.

#### Example

```javascript
[1, 2, 3, 4].copyWithin(1, 2);
```

#### Practical Question 1 --- Concept practice

Predict the result of the example.

#### Practical Question 2 --- Simple QA/real-world practice

Why is `copyWithin()` rarely needed in test automation?

#### How this is used later in Playwright

Useful mainly for recognizing specialized array manipulation.

### 5.2.4 entries()

#### Simple explanation

Returns an iterator of `[index, value]` pairs.

#### Example

```javascript
for (const [index, value] of ["a", "b"].entries()) console.log(index, value);
```

#### Practical Question 1 --- Concept practice

Print index and value for each item.

#### Practical Question 2 --- Simple QA/real-world practice

Log test-data index and test name.

#### How this is used later in Playwright

Useful when both index and value are needed.

### 5.2.5 every()

#### Simple explanation

Returns true only if every item passes a condition.

#### Example

```javascript
[2, 4, 6].every(n => n % 2 === 0);
```

#### Practical Question 1 --- Concept practice

Check whether all numbers are even.

#### Practical Question 2 --- Simple QA/real-world practice

Check whether every API response has status 200.

#### How this is used later in Playwright

Useful for collection-wide validation.

### 5.2.6 fill()

#### Simple explanation

Replaces array elements with a value over a selected range.

#### Example

```javascript
new Array(3).fill("pending");
```

#### Practical Question 1 --- Concept practice

Create three `pending` values.

#### Practical Question 2 --- Simple QA/real-world practice

Create initial status data for three test records.

#### How this is used later in Playwright

Useful for generating simple repeated test data.

### 5.2.7 filter()

#### Simple explanation

Returns a new array containing items that pass a condition.

#### Example

```javascript
[5, 10, 15].filter(n => n > 10);
```

#### Practical Question 1 --- Concept practice

Keep values greater than 10.

#### Practical Question 2 --- Simple QA/real-world practice

Keep only failed tests from a result list.

#### How this is used later in Playwright

Useful for selecting relevant test data.

### 5.2.8 find()

#### Simple explanation

Returns the first matching item or undefined.

#### Example

```javascript
users.find(u => u.id === 101);
```

#### Practical Question 1 --- Concept practice

Find the first number greater than 10.

#### Practical Question 2 --- Simple QA/real-world practice

Find a user with ID 101.

#### How this is used later in Playwright

Useful for locating one record.

### 5.2.9 findIndex()

#### Simple explanation

Returns the index of the first matching item or -1.

#### Example

```javascript
[10, 20, 30].findIndex(n => n === 20);
```

#### Practical Question 1 --- Concept practice

Find the index of 20.

#### Practical Question 2 --- Simple QA/real-world practice

Find the position of a failed test.

#### How this is used later in Playwright

Useful when you need the position rather than the item.

### 5.2.10 findLast()

#### Simple explanation

Returns the last matching item or undefined.

#### Example

```javascript
[1, 2, 3, 2].findLast(n => n === 2);
```

#### Practical Question 1 --- Concept practice

Find the last 2.

#### Practical Question 2 --- Simple QA/real-world practice

Find the most recent failed result in an ordered list.

#### How this is used later in Playwright

Useful with ordered test results.

### 5.2.11 findLastIndex()

#### Simple explanation

Returns the index of the last matching item or -1.

#### Example

```javascript
[1, 2, 3, 2].findLastIndex(n => n === 2);
```

#### Practical Question 1 --- Concept practice

Find the last index of 2.

#### Practical Question 2 --- Simple QA/real-world practice

Find the position of the most recent failure.

#### How this is used later in Playwright

Useful when the latest matching result matters.

### 5.2.12 flat()

#### Simple explanation

Flattens nested arrays to a specified depth.

#### Example

```javascript
[1, [2, [3]]].flat(2);
```

#### Practical Question 1 --- Concept practice

Flatten one level of `[1,[2,3]]`.

#### Practical Question 2 --- Simple QA/real-world practice

Flatten grouped test-case arrays.

#### How this is used later in Playwright

Useful when test data is nested.

### 5.2.13 flatMap()

#### Simple explanation

Maps each item and then flattens one level.

#### Example

```javascript
[1, 2].flatMap(n => [n, n * 2]);
```

#### Practical Question 1 --- Concept practice

Turn `[1,2]` into `[1,2,2,4]`.

#### Practical Question 2 --- Simple QA/real-world practice

Turn each test suite into its test names.

#### How this is used later in Playwright

Useful for expanding structured test data.

### 5.2.14 forEach()

#### Simple explanation

Runs a function once for each array item and does not create a new array.

#### Example

```javascript
[1, 2, 3].forEach(n => console.log(n));
```

#### Practical Question 1 --- Concept practice

Print every number.

#### Practical Question 2 --- Simple QA/real-world practice

Log every test name.

#### How this is used later in Playwright

Useful for actions/logging where no transformed array is needed.

### 5.2.15 includes()

#### Simple explanation

Checks whether an array contains a value.

#### Example

```javascript
["chromium", "firefox"].includes("firefox");
```

#### Practical Question 1 --- Concept practice

Check whether Firefox is supported.

#### Practical Question 2 --- Simple QA/real-world practice

Check whether `@smoke` is present in tags.

#### How this is used later in Playwright

Useful for supported values and tags.

### 5.2.16 indexOf()

#### Simple explanation

Returns the first index of a value or -1.

#### Example

```javascript
["a", "b", "a"].indexOf("a");
```

#### Practical Question 1 --- Concept practice

Find the first index of `b`.

#### Practical Question 2 --- Simple QA/real-world practice

Find the position of a test name.

#### How this is used later in Playwright

Useful when you need a value position.

### 5.2.17 join()

#### Simple explanation

Combines array items into a string using a separator.

#### Example

```javascript
["smoke", "api"].join(", ");
```

#### Practical Question 1 --- Concept practice

Join three tags with commas.

#### Practical Question 2 --- Simple QA/real-world practice

Build a readable list for a report message.

#### How this is used later in Playwright

Useful for logs, messages, and query strings.

### 5.2.18 keys()

#### Simple explanation

Returns an iterator of array indexes.

#### Example

```javascript
for (const key of ["a", "b"].keys()) console.log(key);
```

#### Practical Question 1 --- Concept practice

Print the indexes of an array.

#### Practical Question 2 --- Simple QA/real-world practice

Log the index of each test record.

#### How this is used later in Playwright

Useful when indexes are required.

### 5.2.19 lastIndexOf()

#### Simple explanation

Returns the last index of a value or -1.

#### Example

```javascript
["a", "b", "a"].lastIndexOf("a");
```

#### Practical Question 1 --- Concept practice

Find the last index of `a`.

#### Practical Question 2 --- Simple QA/real-world practice

Find the last occurrence of a status in a history array.

#### How this is used later in Playwright

Useful with ordered histories.

### 5.2.20 map()

#### Simple explanation

Creates a new array by transforming every item.

#### Example

```javascript
[1, 2, 3].map(n => n * 2);
```

#### Practical Question 1 --- Concept practice

Double every number.

#### Practical Question 2 --- Simple QA/real-world practice

Convert browser names to uppercase.

#### How this is used later in Playwright

Useful for transforming test data.

### 5.2.21 pop()

#### Simple explanation

Removes and returns the last item.

#### Example

```javascript
const items = [1, 2, 3];
const last = items.pop();
```

#### Practical Question 1 --- Concept practice

Remove the last item from an array.

#### Practical Question 2 --- Simple QA/real-world practice

Remove the last test record from a temporary queue.

#### How this is used later in Playwright

Useful for stack-like data; remember it mutates the array.

### 5.2.22 push()

#### Simple explanation

Adds one or more items to the end and returns the new length.

#### Example

```javascript
const items = [1, 2];
items.push(3);
```

#### Practical Question 1 --- Concept practice

Add 3 to the end of an array.

#### Practical Question 2 --- Simple QA/real-world practice

Add a new test case to a temporary list.

#### How this is used later in Playwright

Useful for building collections; it mutates the array.

### 5.2.23 reduce()

#### Simple explanation

Combines array items into one accumulated result.

#### Example

```javascript
[1, 2, 3].reduce((sum, n) => sum + n, 0);
```

#### Practical Question 1 --- Concept practice

Calculate the sum of `[10,20,30]`.

#### Practical Question 2 --- Simple QA/real-world practice

Calculate the total duration of test results.

#### How this is used later in Playwright

Useful for totals, grouping, and advanced data processing.

### 5.2.24 reduceRight()

#### Simple explanation

Like `reduce()`, but processes items from right to left.

#### Example

```javascript
["a", "b", "c"].reduceRight((x, y) => x + y, "");
```

#### Practical Question 1 --- Concept practice

Build a string from right to left.

#### Practical Question 2 --- Simple QA/real-world practice

Give a use case involving reverse-priority processing.

#### How this is used later in Playwright

Useful for specialized accumulation.

### 5.2.25 reverse()

#### Simple explanation

Reverses an array in place.

#### Example

```javascript
const items = [1, 2, 3];
items.reverse();
```

#### Practical Question 1 --- Concept practice

Reverse `[1,2,3]`.

#### Practical Question 2 --- Simple QA/real-world practice

Reverse a list of test results for display.

#### How this is used later in Playwright

Useful when mutation is acceptable; otherwise consider `toReversed()`.

### 5.2.26 shift()

#### Simple explanation

Removes and returns the first item.

#### Example

```javascript
const items = [1, 2, 3];
items.shift();
```

#### Practical Question 1 --- Concept practice

Remove the first item.

#### Practical Question 2 --- Simple QA/real-world practice

Process the next item from a small queue.

#### How this is used later in Playwright

Useful for queue-like data; it mutates the array.

### 5.2.27 slice()

#### Simple explanation

Returns a shallow copy of part of an array without changing the original.

#### Example

```javascript
[1, 2, 3, 4].slice(1, 3);
```

#### Practical Question 1 --- Concept practice

Extract items at indexes 1 and 2.

#### Practical Question 2 --- Simple QA/real-world practice

Take the first five test records.

#### How this is used later in Playwright

Useful for selecting subsets safely.

### 5.2.28 some()

#### Simple explanation

Returns true if at least one item passes a condition.

#### Example

```javascript
[1, 3, 8].some(n => n > 5);
```

#### Practical Question 1 --- Concept practice

Check whether any number is greater than 5.

#### Practical Question 2 --- Simple QA/real-world practice

Check whether any test failed.

#### How this is used later in Playwright

Useful for collection-level checks.

### 5.2.29 sort()

#### Simple explanation

Sorts an array in place and accepts a comparison function for numeric/custom sorting.

#### Example

```javascript
[10, 2, 5].sort((a, b) => a - b);
```

#### Practical Question 1 --- Concept practice

Sort numbers ascending.

#### Practical Question 2 --- Simple QA/real-world practice

Sort test names alphabetically.

#### How this is used later in Playwright

Useful for deterministic test-data ordering; provide a comparator for numbers.

### 5.2.30 splice()

#### Simple explanation

Adds/removes items at a chosen position and mutates the array.

#### Example

```javascript
const items = [1, 2, 3];
items.splice(1, 1, 20);
```

#### Practical Question 1 --- Concept practice

Replace the second item with 20.

#### Practical Question 2 --- Simple QA/real-world practice

Remove a test record at a known position.

#### How this is used later in Playwright

Useful for controlled mutation; prefer non-mutating alternatives when practical.

### 5.2.31 toReversed()

#### Simple explanation

Returns a reversed copy without changing the original array.

#### Example

```javascript
const result = [1, 2, 3].toReversed();
```

#### Practical Question 1 --- Concept practice

Reverse an array without mutating it.

#### Practical Question 2 --- Simple QA/real-world practice

Show test results newest-first while keeping the original order.

#### How this is used later in Playwright

Useful for safer immutable-style test-data handling.

### 5.2.32 toSorted()

#### Simple explanation

Returns a sorted copy without changing the original array.

#### Example

```javascript
const result = [10, 2, 5].toSorted((a, b) => a - b);
```

#### Practical Question 1 --- Concept practice

Sort numbers without changing the original array.

#### Practical Question 2 --- Simple QA/real-world practice

Sort test names for display while preserving source order.

#### How this is used later in Playwright

Useful for deterministic reporting.

### 5.2.33 toSpliced()

#### Simple explanation

Returns a changed copy without mutating the original array.

#### Example

```javascript
const result = [1, 2, 3].toSpliced(1, 1, 20);
```

#### Practical Question 1 --- Concept practice

Replace the second item without mutation.

#### Practical Question 2 --- Simple QA/real-world practice

Create a modified test-data set without changing the source.

#### How this is used later in Playwright

Useful for immutable test data.

### 5.2.34 unshift()

#### Simple explanation

Adds items to the beginning and returns the new length.

#### Example

```javascript
const items = [2, 3];
items.unshift(1);
```

#### Practical Question 1 --- Concept practice

Add 1 to the beginning.

#### Practical Question 2 --- Simple QA/real-world practice

Add a high-priority test to the front of a list.

#### How this is used later in Playwright

Useful for queue-like data; it mutates the array.

### 5.2.35 values()

#### Simple explanation

Returns an iterator over array values.

#### Example

```javascript
for (const value of ["a", "b"].values()) console.log(value);
```

#### Practical Question 1 --- Concept practice

Print every value using `values()`.

#### Practical Question 2 --- Simple QA/real-world practice

Iterate over test names using the values iterator.

#### How this is used later in Playwright

Useful when working directly with iterators.

### 5.2.36 Array.prototype.toString()

#### Simple explanation

Returns a string representation of the array, usually by joining items with commas.

#### Example

```javascript
["smoke", "api"].toString();
```

#### Practical Question 1 --- Concept practice

Convert `["a", "b"]` to a string using `toString()`.

#### Practical Question 2 --- Simple QA/real-world practice

Create a readable string from a small test-tag array.

#### How this is used later in Playwright

Useful to recognize when arrays are implicitly converted to strings. Prefer `join()` when you want to control the separator.

### 5.2.37 Array.prototype.toLocaleString()

#### Simple explanation

Returns a locale-sensitive string representation of the array by formatting its elements.

#### Example

```javascript
[1000, 2000].toLocaleString();
```

#### Practical Question 1 --- Concept practice

Call `toLocaleString()` on a numeric array.

#### Practical Question 2 --- Simple QA/real-world practice

Give one QA scenario where locale-sensitive formatting could matter.

#### How this is used later in Playwright

Useful for recognizing locale-specific UI formatting.

### 5.2.38 with()

#### Simple explanation

Returns a copy with one element replaced at an index.

#### Example

```javascript
const result = [1, 2, 3].with(1, 20);
```

#### Practical Question 1 --- Concept practice

Replace index 1 without mutation.

#### Practical Question 2 --- Simple QA/real-world practice

Create a modified browser list while preserving the original.

#### How this is used later in Playwright

Useful for immutable test-data changes.

### 5.2.39 Array.from()

#### Simple explanation

Static method that creates an array from an iterable or array-like value.

#### Example

```javascript
Array.from("QA");
```

#### Practical Question 1 --- Concept practice

Convert `"QA"` into an array of characters.

#### Practical Question 2 --- Simple QA/real-world practice

Convert a NodeList-like collection into an array before using array methods.

#### How this is used later in Playwright

Useful when converting iterable/array-like data.

### 5.2.40 Array.fromAsync()

#### Simple explanation

Static method that creates an array from an async iterable or iterable of Promises.

#### Example

```javascript
const result = await Array.fromAsync([Promise.resolve(1), Promise.resolve(2)]);
```

#### Practical Question 1 --- Concept practice

Convert two Promises into an array of resolved values.

#### Practical Question 2 --- Simple QA/real-world practice

Collect async test-data results into an array.

#### How this is used later in Playwright

Useful for modern asynchronous data processing.

### 5.2.41 Array.isArray()

#### Simple explanation

Static method that checks whether a value is an array.

#### Example

```javascript
Array.isArray([1, 2]);
```

#### Practical Question 1 --- Concept practice

Check whether a value is an array.

#### Practical Question 2 --- Simple QA/real-world practice

Validate that an API field contains a list.

#### How this is used later in Playwright

Very useful when validating API response structures.

### 5.2.42 Array.of()

#### Simple explanation

Static method that creates an array from its arguments.

#### Example

```javascript
Array.of(1, 2, 3);
```

#### Practical Question 1 --- Concept practice

Create an array containing 1, 2, and 3.

#### Practical Question 2 --- Simple QA/real-world practice

Create a small test-data array from individual values.

#### How this is used later in Playwright

Useful when you want consistent argument-to-array behavior.

## 6. Objects and Modern JavaScript

**Estimated focused time: 12 hours (720 minutes)**

Objects are central to test data, API payloads, configuration, fixtures, and Page Objects.

### 6.1 Objects

#### Simple explanation

Objects store related data as key/value pairs.

#### Example

```javascript
const user = { name: "A", role: "QA" };
```

#### Practical Question 1 --- Concept practice

Create a user object with name and role.

#### Practical Question 2 --- Simple QA/real-world practice

Add an `active` property.

#### How this is used later in Playwright

Test data and API responses are commonly objects.

### 6.2 Dot notation

#### Simple explanation

Dot notation reads a known property.

#### Example

```javascript
console.log(user.name);
```

#### Practical Question 1 --- Concept practice

Read `user.name`.

#### Practical Question 2 --- Simple QA/real-world practice

Read `user.role`.

#### How this is used later in Playwright

Common when reading known API/test-data fields.

### 6.3 Bracket notation

#### Simple explanation

Bracket notation reads a property using a string or variable.

#### Example

```javascript
const field = "email";
console.log(user[field]);
```

#### Practical Question 1 --- Concept practice

Read `user[field]`.

#### Practical Question 2 --- Simple QA/real-world practice

Use a variable to choose a property dynamically.

#### How this is used later in Playwright

Useful for dynamic field validation.

### 6.4 Object destructuring

#### Simple explanation

Destructuring extracts properties into variables.

#### Example

```javascript
const { name, role } = user;
```

#### Practical Question 1 --- Concept practice

Extract `name` and `role`.

#### Practical Question 2 --- Simple QA/real-world practice

Extract `status` and `message` from a response.

#### How this is used later in Playwright

Useful with API responses and test data.

### 6.5 Array destructuring

#### Simple explanation

Destructuring extracts array values by position.

#### Example

```javascript
const [first, second] = ["chromium", "firefox"];
```

#### Practical Question 1 --- Concept practice

Extract the first two values.

#### Practical Question 2 --- Simple QA/real-world practice

Extract status and message from `[200, "OK"]`.

#### How this is used later in Playwright

Useful for fixed result pairs.

### 6.6 spread operator

#### Simple explanation

Spread expands an object or array into a new object/array.

#### Example

```javascript
const config = { ...base, retries: 2 };
```

#### Practical Question 1 --- Concept practice

Copy a base config and change timeout.

#### Practical Question 2 --- Simple QA/real-world practice

Combine two test-data arrays.

#### How this is used later in Playwright

Useful for configuration and test-data composition.

### 6.7 rest parameter

#### Simple explanation

Rest collects multiple function arguments into an array.

#### Example

```javascript
function tags(...values) { console.log(values); }
```

#### Practical Question 1 --- Concept practice

Create a function accepting any number of tags.

#### Practical Question 2 --- Simple QA/real-world practice

Call it with three tags.

#### How this is used later in Playwright

Useful for flexible helper APIs.

### 6.8 Object Methods and Utilities

### 6.8.1 Object.keys()

#### Simple explanation

Returns an array containing an object's own enumerable property names.

#### Example

```javascript
Object.keys({ name: "A", role: "QA" });
```

#### Practical Question 1 --- Concept practice

Get the keys of a user object.

#### Practical Question 2 --- Simple QA/real-world practice

Check which fields are present in an API response.

#### How this is used later in Playwright

Useful for dynamic field validation.

### 6.8.2 Object.values()

#### Simple explanation

Returns an array containing an object's own enumerable values.

#### Example

```javascript
Object.values({ status: 200, ok: true });
```

#### Practical Question 1 --- Concept practice

Get all values from a config object.

#### Practical Question 2 --- Simple QA/real-world practice

Check whether any response field has a specific value.

#### How this is used later in Playwright

Useful for inspecting API/config objects.

### 6.8.3 Object.entries()

#### Simple explanation

Returns an array of `[key, value]` pairs.

#### Example

```javascript
Object.entries({ status: 200, ok: true });
```

#### Practical Question 1 --- Concept practice

Convert an object into key/value pairs.

#### Practical Question 2 --- Simple QA/real-world practice

Loop through API fields and values.

#### How this is used later in Playwright

Useful for dynamic validation and logging.

### 6.8.4 Object.fromEntries()

#### Simple explanation

Creates an object from key/value pairs.

#### Example

```javascript
Object.fromEntries([["name", "A"], ["role", "QA"]]);
```

#### Practical Question 1 --- Concept practice

Create an object from two key/value pairs.

#### Practical Question 2 --- Simple QA/real-world practice

Convert transformed API field pairs back into an object.

#### How this is used later in Playwright

Useful after filtering or mapping object entries.

### 6.8.5 Object.assign()

#### Simple explanation

Copies enumerable properties from source objects into a target object.

#### Example

```javascript
Object.assign({}, { baseUrl: "/" }, { timeout: 30000 });
```

#### Practical Question 1 --- Concept practice

Merge two small objects.

#### Practical Question 2 --- Simple QA/real-world practice

Create a test configuration by combining defaults and overrides.

#### How this is used later in Playwright

Useful for configuration composition; spread syntax is often clearer.

### 6.8.6 Object.hasOwn()

#### Simple explanation

Checks whether an object has an own property with a given key.

#### Example

```javascript
Object.hasOwn({ id: 1 }, "id");
```

#### Practical Question 1 --- Concept practice

Check whether an object has `email`.

#### Practical Question 2 --- Simple QA/real-world practice

Validate that an API response contains a required field.

#### How this is used later in Playwright

Useful for safe API response validation.

### 6.8.7 Object.groupBy()

#### Simple explanation

Groups iterable items into an object based on a callback that returns each group key.

#### Example

```javascript
const result = Object.groupBy([1, 2, 3, 4], n => n % 2 === 0 ? "even" : "odd");
```

#### Practical Question 1 --- Concept practice

Group `[1, 2, 3, 4]` into `even` and `odd`.

#### Practical Question 2 --- Simple QA/real-world practice

Group test results by `PASS` and `FAIL`.

#### How this is used later in Playwright

Useful for grouping test/API results for reports and analysis.

### 6.8.8 Object.getOwnPropertyNames()

#### Simple explanation

Returns an array of an object's own string property names, including non-enumerable ones.

#### Example

```javascript
Object.getOwnPropertyNames({ a: 1 });
```

#### Practical Question 1 --- Concept practice

Get the property names of a simple object.

#### Practical Question 2 --- Simple QA/real-world practice

When might you need non-enumerable properties?

#### How this is used later in Playwright

Useful mainly for deeper JavaScript/framework debugging.

### 6.8.9 Object.getOwnPropertySymbols()

#### Simple explanation

Returns an array of an object's own Symbol-keyed properties.

#### Example

```javascript
const s = Symbol("id");
const obj = { [s]: 1 };
Object.getOwnPropertySymbols(obj);
```

#### Practical Question 1 --- Concept practice

Create and retrieve a Symbol-keyed property.

#### Practical Question 2 --- Simple QA/real-world practice

Why might this matter when inspecting framework internals?

#### How this is used later in Playwright

Useful for advanced JavaScript/debugging.

### 6.8.10 Object.getOwnPropertyDescriptor()

#### Simple explanation

Returns the descriptor for one own property.

#### Example

```javascript
Object.getOwnPropertyDescriptor({ a: 1 }, "a");
```

#### Practical Question 1 --- Concept practice

Get the descriptor for property `a`.

#### Practical Question 2 --- Simple QA/real-world practice

What kinds of details can a descriptor expose?

#### How this is used later in Playwright

Useful for advanced debugging and property behavior.

### 6.8.11 Object.getOwnPropertyDescriptors()

#### Simple explanation

Returns descriptors for all own properties.

#### Example

```javascript
Object.getOwnPropertyDescriptors({ a: 1, b: 2 });
```

#### Practical Question 1 --- Concept practice

Get descriptors for a simple object.

#### Practical Question 2 --- Simple QA/real-world practice

Inspect a framework object when debugging property behavior.

#### How this is used later in Playwright

Useful for advanced object inspection.

### 6.8.12 Object.getPrototypeOf()

#### Simple explanation

Returns an object's prototype.

#### Example

```javascript
Object.getPrototypeOf({});
```

#### Practical Question 1 --- Concept practice

Read the prototype of a simple object.

#### Practical Question 2 --- Simple QA/real-world practice

Why might prototype inspection help debug a class?

#### How this is used later in Playwright

Useful for understanding inheritance and framework internals.

### 6.8.13 Object.setPrototypeOf()

#### Simple explanation

Changes an object's prototype.

#### Example

```javascript
const obj = {};
Object.setPrototypeOf(obj, { kind: "test" });
```

#### Practical Question 1 --- Concept practice

Set a prototype in a toy example.

#### Practical Question 2 --- Simple QA/real-world practice

Should this normally be used in Playwright test code?

#### How this is used later in Playwright

Rarely needed; recognize it but avoid unnecessary prototype mutation.

### 6.8.14 Object.create()

#### Simple explanation

Creates an object using a specified prototype.

#### Example

```javascript
const user = Object.create({ role: "QA" });
```

#### Practical Question 1 --- Concept practice

Create an object with a prototype containing `role`.

#### Practical Question 2 --- Simple QA/real-world practice

What is one difference between Object.create and an object literal?

#### How this is used later in Playwright

Useful for understanding prototypes; uncommon in normal Playwright code.

### 6.8.15 Object.defineProperty()

#### Simple explanation

Defines or changes a property with descriptor settings.

#### Example

```javascript
const obj = {};
Object.defineProperty(obj, "id", { value: 1 });
```

#### Practical Question 1 --- Concept practice

Define an `id` property.

#### Practical Question 2 --- Simple QA/real-world practice

Name one descriptor setting you can control.

#### How this is used later in Playwright

Useful for advanced framework utilities and debugging.

### 6.8.16 Object.defineProperties()

#### Simple explanation

Defines multiple properties with descriptors.

#### Example

```javascript
const obj = {};
Object.defineProperties(obj, { a: { value: 1 }, b: { value: 2 } });
```

#### Practical Question 1 --- Concept practice

Define two properties at once.

#### Practical Question 2 --- Simple QA/real-world practice

When might a framework utility need multiple descriptors?

#### How this is used later in Playwright

Useful mainly for advanced JavaScript utilities.

### 6.8.17 Object.preventExtensions()

#### Simple explanation

Prevents new properties from being added to an object.

#### Example

```javascript
const config = { timeout: 30000 };
Object.preventExtensions(config);
```

#### Practical Question 1 --- Concept practice

Prevent a new property from being added.

#### Practical Question 2 --- Simple QA/real-world practice

Why might protecting a config object be useful?

#### How this is used later in Playwright

Useful for defensive programming, though uncommon in test code.

### 6.8.18 Object.isExtensible()

#### Simple explanation

Checks whether new properties can be added to an object.

#### Example

```javascript
Object.isExtensible({});
```

#### Practical Question 1 --- Concept practice

Check whether an object is extensible.

#### Practical Question 2 --- Simple QA/real-world practice

Use it to verify a protected config object.

#### How this is used later in Playwright

Useful for advanced object-state checks.

### 6.8.19 Object.seal()

#### Simple explanation

Prevents adding/removing properties but allows existing writable properties to change.

#### Example

```javascript
const config = { timeout: 30000 };
Object.seal(config);
```

#### Practical Question 1 --- Concept practice

Seal a config object.

#### Practical Question 2 --- Simple QA/real-world practice

What can still change after sealing?

#### How this is used later in Playwright

Useful for understanding object immutability levels.

### 6.8.20 Object.isSealed()

#### Simple explanation

Checks whether an object is sealed.

#### Example

```javascript
const config = {};
Object.seal(config);
Object.isSealed(config);
```

#### Practical Question 1 --- Concept practice

Check whether an object is sealed.

#### Practical Question 2 --- Simple QA/real-world practice

Verify that a configuration object is sealed.

#### How this is used later in Playwright

Useful for defensive object checks.

### 6.8.21 Object.freeze()

#### Simple explanation

Prevents adding/removing properties and prevents changing existing data properties.

#### Example

```javascript
const config = Object.freeze({ timeout: 30000 });
```

#### Practical Question 1 --- Concept practice

Freeze a configuration object.

#### Practical Question 2 --- Simple QA/real-world practice

Why could freezing shared test configuration help?

#### How this is used later in Playwright

Useful for protecting immutable configuration.

### 6.8.22 Object.isFrozen()

#### Simple explanation

Checks whether an object is frozen.

#### Example

```javascript
const config = Object.freeze({ timeout: 30000 });
Object.isFrozen(config);
```

#### Practical Question 1 --- Concept practice

Check whether the config is frozen.

#### Practical Question 2 --- Simple QA/real-world practice

Verify that shared configuration is immutable.

#### How this is used later in Playwright

Useful for defensive programming.

### 6.8.23 Object.is()

#### Simple explanation

Determines whether two values are the same using SameValue semantics.

#### Example

```javascript
Object.is(NaN, NaN);
```

#### Practical Question 1 --- Concept practice

Compare two values with Object.is.

#### Practical Question 2 --- Simple QA/real-world practice

What surprising numeric value does Object.is handle differently from `===`?

#### How this is used later in Playwright

Useful for understanding exact JavaScript equality semantics.

### 6.8.24 Object.prototype.hasOwnProperty()

#### Simple explanation

Checks whether an object directly owns a property. `Object.hasOwn()` is the preferred modern static form.

#### Example

```javascript
const user = { id: 1 };
user.hasOwnProperty("id");
```

#### Practical Question 1 --- Concept practice

Check whether `id` is an own property.

#### Practical Question 2 --- Simple QA/real-world practice

Why might `Object.hasOwn()` be safer for unknown API objects?

#### How this is used later in Playwright

Useful to recognize older code; prefer `Object.hasOwn()`.

### 6.8.25 Object.prototype.toString()

#### Simple explanation

Returns a string describing the object type/tag.

#### Example

```javascript
Object.prototype.toString.call([]);
```

#### Practical Question 1 --- Concept practice

Find the tag for an array.

#### Practical Question 2 --- Simple QA/real-world practice

How can this help when debugging an unknown value?

#### How this is used later in Playwright

Useful for type/debugging checks in generic utilities.

### 6.8.26 Object.prototype.toLocaleString()

#### Simple explanation

Returns a locale-sensitive string representation; objects can customize it.

#### Example

```javascript
({ valueOf() { return 10; } }).toLocaleString();
```

#### Practical Question 1 --- Concept practice

Call toLocaleString on a simple object.

#### Practical Question 2 --- Simple QA/real-world practice

Where is locale-sensitive formatting more useful than this generic method?

#### How this is used later in Playwright

Usually use type-specific formatting methods instead.

### 6.8.27 Object.prototype.valueOf()

#### Simple explanation

Returns the primitive value associated with an object; often invoked implicitly.

#### Example

```javascript
const n = new Number(10);
console.log(n.valueOf());
```

#### Practical Question 1 --- Concept practice

Read the primitive value from a Number object.

#### Practical Question 2 --- Simple QA/real-world practice

Should you normally call valueOf directly?

#### How this is used later in Playwright

Mostly a concept to recognize; rarely needed directly.

## 7. Advanced JavaScript

**Estimated focused time: 6 hours (360 minutes)**

### 7.1 scope

#### Simple explanation

Scope controls where a variable can be accessed.

#### Example

``` javascript
if (true) {
  const message = "inside";
}
```

#### Practical Question 1 --- Concept practice

Create a `const` inside an if block and try to access it outside.

#### Practical Question 2 --- Simple QA/real-world practice

Create a variable outside a block and read it inside.

#### How this is used later in Playwright

Understanding scope prevents bugs in test helpers and fixtures.

### 7.2 closures

#### Simple explanation

A closure allows an inner function to remember values from its outer
function.

#### Example

``` javascript
function createLogger(name) {
  return message => `${name}: ${message}`;
}
```

#### Practical Question 1 --- Concept practice

Create a logger that remembers a test name.

#### Practical Question 2 --- Simple QA/real-world practice

Create two loggers with different names and call both.

#### How this is used later in Playwright

Useful for configurable helper factories.

### 7.3 this

#### Simple explanation

`this` refers to the object/context associated with a method call.

#### Example

``` javascript
const user = {
  name: "Naresh",
  getName() { return this.name; }
};
```

#### Practical Question 1 --- Concept practice

Create an object with a `name` and `getName()` method using `this`.

#### Practical Question 2 --- Simple QA/real-world practice

What does `this.name` refer to when the method is called as
`user.getName()`?

#### How this is used later in Playwright

Page Objects and classes commonly use `this.page`.

### 7.4 callbacks

#### Simple explanation

A callback is a function passed to another function.

#### Example

``` javascript
[1, 2, 3].forEach(n => console.log(n));
```

#### Practical Question 1 --- Concept practice

Pass an arrow function to `forEach()`.

#### Practical Question 2 --- Simple QA/real-world practice

Create a function that accepts a callback and invokes it.

#### How this is used later in Playwright

Callbacks are common in array methods and event-style APIs.

### 7.5 higher-order functions

#### Simple explanation

A higher-order function accepts a function or returns a function.

#### Example

``` javascript
function run(action) {
  action();
}
```

#### Practical Question 1 --- Concept practice

Create a `run()` function that accepts an action.

#### Practical Question 2 --- Simple QA/real-world practice

Pass an arrow function that prints `Test started`.

#### How this is used later in Playwright

Array methods are higher-order functions because they accept callbacks.

### 7.6 type coercion

#### Simple explanation

JavaScript can automatically convert values between types in some
operations.

#### Example

``` javascript
console.log("5" + 1); // "51"
console.log("5" === 5); // false
```

#### Practical Question 1 --- Concept practice

Predict the result of `"5" + 1`.

#### Practical Question 2 --- Simple QA/real-world practice

Explain why `"5" === 5` is false.

#### How this is used later in Playwright

Useful when processing browser/UI text and numeric API data.

## 8. Built-in Utilities for Test Automation

**Estimated focused time: 6 hours (360 minutes)**

JSON, Math, Date, RegExp, Set, and Map are practical JavaScript utilities for UI and API automation.

### 8.1 JSON.parse()

#### Simple explanation

Converts a JSON string into a JavaScript value/object.

#### Example

```javascript
const data = JSON.parse('{"id":101,"name":"Admin"}');
```

#### Practical Question 1 --- Concept practice

Parse a JSON string containing `id`.

#### Practical Question 2 --- Simple QA/real-world practice

Parse a sample API response body represented as a string.

#### How this is used later in Playwright

Essential for understanding raw JSON and API test data.

### 8.2 JSON.stringify()

#### Simple explanation

Converts a JavaScript value/object into a JSON string.

#### Example

```javascript
const body = JSON.stringify({ name: "Admin" });
```

#### Practical Question 1 --- Concept practice

Convert a user object to JSON.

#### Practical Question 2 --- Simple QA/real-world practice

Create a JSON request body for an API test.

#### How this is used later in Playwright

Very common in API automation and logging.

### 8.3 Math.round()

#### Simple explanation

Rounds a number to the nearest integer.

#### Example

```javascript
Math.round(12.6);
```

#### Practical Question 1 --- Concept practice

Round 12.6.

#### Practical Question 2 --- Simple QA/real-world practice

Round a calculated test value for comparison.

#### How this is used later in Playwright

Useful for numeric assertions.

### 8.4 Math.floor()

#### Simple explanation

Rounds a number down to the nearest integer.

#### Example

```javascript
Math.floor(12.9);
```

#### Practical Question 1 --- Concept practice

Round 12.9 down.

#### Practical Question 2 --- Simple QA/real-world practice

Convert a decimal quantity to a whole-number test value.

#### How this is used later in Playwright

Useful for data generation and calculations.

### 8.5 Math.ceil()

#### Simple explanation

Rounds a number up to the nearest integer.

#### Example

```javascript
Math.ceil(12.1);
```

#### Practical Question 1 --- Concept practice

Round 12.1 up.

#### Practical Question 2 --- Simple QA/real-world practice

Calculate the number of pages needed for a dataset.

#### How this is used later in Playwright

Useful for pagination calculations.

### 8.6 Math.max()

#### Simple explanation

Returns the largest supplied value.

#### Example

```javascript
Math.max(10, 30, 20);
```

#### Practical Question 1 --- Concept practice

Find the largest of three values.

#### Practical Question 2 --- Simple QA/real-world practice

Find the slowest test duration from a few values.

#### How this is used later in Playwright

Useful for metrics and thresholds.

### 8.7 Math.min()

#### Simple explanation

Returns the smallest supplied value.

#### Example

```javascript
Math.min(10, 30, 20);
```

#### Practical Question 1 --- Concept practice

Find the smallest of three values.

#### Practical Question 2 --- Simple QA/real-world practice

Find the fastest test duration.

#### How this is used later in Playwright

Useful for metrics and thresholds.

### 8.8 Math.abs()

#### Simple explanation

Returns the absolute value of a number.

#### Example

```javascript
Math.abs(-10);
```

#### Practical Question 1 --- Concept practice

Get the absolute value of -10.

#### Practical Question 2 --- Simple QA/real-world practice

Compare the difference between expected and actual values without sign.

#### How this is used later in Playwright

Useful for numeric tolerance checks.

### 8.9 Math.random()

#### Simple explanation

Returns a pseudo-random number from 0 inclusive to 1 exclusive.

#### Example

```javascript
Math.random();
```

#### Practical Question 1 --- Concept practice

Generate a random number between 0 and 1.

#### Practical Question 2 --- Simple QA/real-world practice

Generate simple random test data.

#### How this is used later in Playwright

Useful for data generation, but avoid it when tests need deterministic reproducibility.

### 8.10 Math.pow()

#### Simple explanation

Raises a number to a power.

#### Example

```javascript
Math.pow(2, 3);
```

#### Practical Question 1 --- Concept practice

Calculate 2 to the power of 3.

#### Practical Question 2 --- Simple QA/real-world practice

Calculate a numeric value used in test-data generation.

#### How this is used later in Playwright

Useful for numeric calculations.

### 8.11 Math.sqrt()

#### Simple explanation

Returns the square root of a number.

#### Example

```javascript
Math.sqrt(16);
```

#### Practical Question 1 --- Concept practice

Find the square root of 16.

#### Practical Question 2 --- Simple QA/real-world practice

Give one QA scenario involving a numeric calculation.

#### How this is used later in Playwright

Useful for specialized numeric data.

### 8.12 Date.getTime()

#### Simple explanation

Returns the timestamp in milliseconds since the Unix epoch.

#### Example

```javascript
const time = new Date().getTime();
```

#### Practical Question 1 --- Concept practice

Get the current timestamp.

#### Practical Question 2 --- Simple QA/real-world practice

Calculate the duration between two timestamps.

#### How this is used later in Playwright

Useful for measuring elapsed time in data or logs; prefer Playwright timing tools for test performance.

### 8.13 Date.toISOString()

#### Simple explanation

Returns a standardized UTC date-time string.

#### Example

```javascript
new Date("2026-08-11").toISOString();
```

#### Practical Question 1 --- Concept practice

Convert a date to ISO format.

#### Practical Question 2 --- Simple QA/real-world practice

Validate an API timestamp format.

#### How this is used later in Playwright

Extremely useful for API testing.

### 8.14 RegExp.test()

#### Simple explanation

Checks whether a string matches a regular expression and returns a boolean.

#### Example

```javascript
/^QA-\d+$/.test("QA-101");
```

#### Practical Question 1 --- Concept practice

Check whether `QA-101` matches the pattern.

#### Practical Question 2 --- Simple QA/real-world practice

Validate a generated test ID.

#### How this is used later in Playwright

Useful for format validation.

### 8.15 RegExp.exec()

#### Simple explanation

Returns detailed information about the first regex match or null.

#### Example

```javascript
/(\d+)/.exec("Order 123");
```

#### Practical Question 1 --- Concept practice

Extract digits from `Order 123`.

#### Practical Question 2 --- Simple QA/real-world practice

Extract an error code from a message.

#### How this is used later in Playwright

Useful for detailed pattern extraction.

### 8.16 Set

#### Simple explanation

A Set stores unique values and automatically removes duplicates.

#### Example

```javascript
const tags = new Set(["smoke", "smoke", "api"]);
```

#### Practical Question 1 --- Concept practice

Create a Set containing unique tags.

#### Practical Question 2 --- Simple QA/real-world practice

Remove duplicate test tags.

#### How this is used later in Playwright

Useful for uniqueness checks and deduplication.

### 8.17 Map

#### Simple explanation

A Map stores key/value pairs and allows keys of any type.

#### Example

```javascript
const users = new Map([[101, "Admin"]]);
```

#### Practical Question 1 --- Concept practice

Create a Map from user ID to name.

#### Practical Question 2 --- Simple QA/real-world practice

Store test ID to test status mappings.

#### How this is used later in Playwright

Useful when keys are dynamic or not naturally strings.

### 8.13 Date Methods

Date objects represent a point in time. The methods below are taught individually.

### 8.13.1 getFullYear()

#### Simple explanation

Returns the four-digit year.

#### Example

```javascript
const year = new Date().getFullYear();
```

#### Practical Question 1 — Concept practice

Get the current year.

#### Practical Question 2 — Simple QA/real-world practice

Extract the year from an API date.

#### How this is used later in Playwright

Useful for date assertions.


### 8.13.2 getMonth()

#### Simple explanation

Returns the month index from 0 to 11.

#### Example

```javascript
const month = new Date().getMonth();
```

#### Practical Question 1 — Concept practice

Get the current month index.

#### Practical Question 2 — Simple QA/real-world practice

Convert an API date into a month value for validation.

#### How this is used later in Playwright

Useful with calendar data.


### 8.13.3 getDate()

#### Simple explanation

Returns the day of the month from 1 to 31.

#### Example

```javascript
const day = new Date().getDate();
```

#### Practical Question 1 — Concept practice

Get today's day of month.

#### Practical Question 2 — Simple QA/real-world practice

Validate a due date's day.

#### How this is used later in Playwright

Useful for date-based UI/API checks.


### 8.13.4 getDay()

#### Simple explanation

Returns the weekday number from 0 (Sunday) to 6 (Saturday).

#### Example

```javascript
const day = new Date().getDay();
```

#### Practical Question 1 — Concept practice

Get the current weekday number.

#### Practical Question 2 — Simple QA/real-world practice

Check whether a scheduled date falls on a weekend.

#### How this is used later in Playwright

Useful for schedule validation.


### 8.13.5 getHours()

#### Simple explanation

Returns the local hour.

#### Example

```javascript
const hour = new Date().getHours();
```

#### Practical Question 1 — Concept practice

Get the current hour.

#### Practical Question 2 — Simple QA/real-world practice

Validate an API time value.

#### How this is used later in Playwright

Useful for time-based test data.


### 8.13.6 getMinutes()

#### Simple explanation

Returns the local minute.

#### Example

```javascript
const minute = new Date().getMinutes();
```

#### Practical Question 1 — Concept practice

Get the current minute.

#### Practical Question 2 — Simple QA/real-world practice

Validate a timestamp minute component.

#### How this is used later in Playwright

Useful for time validation.


### 8.13.7 getTime()

#### Simple explanation

Returns milliseconds since the Unix epoch.

#### Example

```javascript
const time = new Date().getTime();
```

#### Practical Question 1 — Concept practice

Get a timestamp.

#### Practical Question 2 — Simple QA/real-world practice

Calculate the difference between two timestamps.

#### How this is used later in Playwright

Useful for elapsed-time data calculations.


### 8.13.8 toISOString()

#### Simple explanation

Returns a standardized UTC ISO date-time string.

#### Example

```javascript
new Date().toISOString();
```

#### Practical Question 1 — Concept practice

Convert a Date to ISO format.

#### Practical Question 2 — Simple QA/real-world practice

Validate an API timestamp format.

#### How this is used later in Playwright

Very useful in API testing.


### 8.14 Set Methods

Each important Set method/property is covered separately.

### 8.14.1 add()

#### Simple explanation

Adds a value to a Set.

#### Example

```javascript
const tags = new Set();
tags.add("smoke");
```

#### Practical Question 1 — Concept practice

Add `smoke` to a Set.

#### Practical Question 2 — Simple QA/real-world practice

Add tags from test data while keeping them unique.

#### How this is used later in Playwright

Useful for deduplication.


### 8.14.2 has()

#### Simple explanation

Checks whether a value exists in a Set.

#### Example

```javascript
tags.has("smoke");
```

#### Practical Question 1 — Concept practice

Check whether `smoke` exists.

#### Practical Question 2 — Simple QA/real-world practice

Check whether a test ID was already processed.

#### How this is used later in Playwright

Useful for membership checks.


### 8.14.3 delete()

#### Simple explanation

Removes a value from a Set.

#### Example

```javascript
tags.delete("smoke");
```

#### Practical Question 1 — Concept practice

Delete `smoke`.

#### Practical Question 2 — Simple QA/real-world practice

Remove a test ID from a temporary set.

#### How this is used later in Playwright

Useful for managing unique collections.


### 8.14.4 clear()

#### Simple explanation

Removes all values from a Set.

#### Example

```javascript
tags.clear();
```

#### Practical Question 1 — Concept practice

Clear a Set.

#### Practical Question 2 — Simple QA/real-world practice

Reset collected test IDs.

#### How this is used later in Playwright

Useful for reusable collections.


### 8.14.5 values()

#### Simple explanation

Returns an iterator over Set values.

#### Example

```javascript
tags.values();
```

#### Practical Question 1 — Concept practice

Iterate over Set values.

#### Practical Question 2 — Simple QA/real-world practice

Print all unique test tags.

#### How this is used later in Playwright

Useful for processing unique values.


### 8.14.6 keys()

#### Simple explanation

For Set, `keys()` is an alias of `values()`.

#### Example

```javascript
tags.keys();
```

#### Practical Question 1 — Concept practice

Iterate through Set keys.

#### Practical Question 2 — Simple QA/real-world practice

Explain why Set keys are the same as values.

#### How this is used later in Playwright

Useful for recognizing Set iteration.


### 8.14.7 entries()

#### Simple explanation

Returns `[value, value]` pairs for Set iteration.

#### Example

```javascript
tags.entries();
```

#### Practical Question 1 — Concept practice

Iterate through Set entries.

#### Practical Question 2 — Simple QA/real-world practice

Print unique tags using entries.

#### How this is used later in Playwright

Useful for generic iterable handling.


### 8.14.8 size

#### Simple explanation

`size` is a property containing the number of values in a Set.

#### Example

```javascript
tags.size;
```

#### Practical Question 1 — Concept practice

Find the size of a Set.

#### Practical Question 2 — Simple QA/real-world practice

Verify the number of unique test IDs.

#### How this is used later in Playwright

Useful for uniqueness checks.


### 8.15 Map Methods

Each important Map method/property is covered separately.

### 8.15.1 set()

#### Simple explanation

Adds or updates a key/value pair.

#### Example

```javascript
const status = new Map();
status.set("login", "PASS");
```

#### Practical Question 1 — Concept practice

Store a login status.

#### Practical Question 2 — Simple QA/real-world practice

Store test name to status.

#### How this is used later in Playwright

Useful for result tracking.


### 8.15.2 get()

#### Simple explanation

Returns the value for a key, or undefined when absent.

#### Example

```javascript
status.get("login");
```

#### Practical Question 1 — Concept practice

Read the value for `login`.

#### Practical Question 2 — Simple QA/real-world practice

Retrieve the status of a named test.

#### How this is used later in Playwright

Useful for lookups.


### 8.15.3 has()

#### Simple explanation

Checks whether a key exists.

#### Example

```javascript
status.has("login");
```

#### Practical Question 1 — Concept practice

Check whether `login` exists.

#### Practical Question 2 — Simple QA/real-world practice

Check whether a test has a recorded result.

#### How this is used later in Playwright

Useful for result validation.


### 8.15.4 delete()

#### Simple explanation

Removes a key/value pair.

#### Example

```javascript
status.delete("login");
```

#### Practical Question 1 — Concept practice

Delete the login entry.

#### Practical Question 2 — Simple QA/real-world practice

Remove a stale test result.

#### How this is used later in Playwright

Useful for temporary result stores.


### 8.15.5 clear()

#### Simple explanation

Removes all entries.

#### Example

```javascript
status.clear();
```

#### Practical Question 1 — Concept practice

Clear the Map.

#### Practical Question 2 — Simple QA/real-world practice

Reset results before another run.

#### How this is used later in Playwright

Useful for reusable collections.


### 8.15.6 keys()

#### Simple explanation

Returns an iterator over Map keys.

#### Example

```javascript
status.keys();
```

#### Practical Question 1 — Concept practice

Iterate over test names.

#### Practical Question 2 — Simple QA/real-world practice

List all test names.

#### How this is used later in Playwright

Useful for dynamic processing.


### 8.15.7 values()

#### Simple explanation

Returns an iterator over Map values.

#### Example

```javascript
status.values();
```

#### Practical Question 1 — Concept practice

Iterate over statuses.

#### Practical Question 2 — Simple QA/real-world practice

Find all recorded statuses.

#### How this is used later in Playwright

Useful for result analysis.


### 8.15.8 entries()

#### Simple explanation

Returns an iterator over `[key, value]` pairs.

#### Example

```javascript
status.entries();
```

#### Practical Question 1 — Concept practice

Print each key and value.

#### Practical Question 2 — Simple QA/real-world practice

Print each test and its status.

#### How this is used later in Playwright

Useful for reporting.


### 8.15.9 forEach()

#### Simple explanation

Runs a callback for each Map entry.

#### Example

```javascript
status.forEach((value, key) => console.log(key, value));
```

#### Practical Question 1 — Concept practice

Print all entries.

#### Practical Question 2 — Simple QA/real-world practice

Generate simple status output.

#### How this is used later in Playwright

Useful for reporting.


### 8.15.10 size

#### Simple explanation

`size` is a property containing the number of Map entries.

#### Example

```javascript
status.size;
```

#### Practical Question 1 — Concept practice

Get the number of entries.

#### Practical Question 2 — Simple QA/real-world practice

Verify the number of recorded tests.

#### How this is used later in Playwright

Useful for result tracking.


## 9. Asynchronous JavaScript

**Estimated focused time: 10 hours (600 minutes)**

### 9.1 Promises

#### Simple explanation

A Promise represents a value that will be available later.

#### Example

``` javascript
const result = fetchData();
result.then(data => console.log(data));
```

#### Practical Question 1 --- Concept practice

Create a Promise that resolves with `"PASS"`.

#### Practical Question 2 --- Simple QA/real-world practice

Create a Promise that rejects with an Error.

#### How this is used later in Playwright

Playwright APIs such as `goto()` and `click()` return Promises.

### 9.2 Promise states

#### Simple explanation

A Promise can be pending, fulfilled, or rejected.

#### Example

``` javascript
new Promise((resolve, reject) => {
  resolve("done");
});
```

#### Practical Question 1 --- Concept practice

Name the three Promise states.

#### Practical Question 2 --- Simple QA/real-world practice

Which state represents a failed Promise?

#### How this is used later in Playwright

Understanding states makes async failures easier to reason about.

### 9.3 async functions

#### Simple explanation

An `async` function always returns a Promise.

#### Example

``` javascript
async function getStatus() {
  return 200;
}
```

#### Practical Question 1 --- Concept practice

Create an async function returning `"PASS"`.

#### Practical Question 2 --- Simple QA/real-world practice

Call it and inspect the returned Promise.

#### How this is used later in Playwright

Playwright tests and helpers are commonly async.

### 9.4 await

#### Simple explanation

`await` waits for a Promise to settle inside an async function.

#### Example

``` javascript
const status = await getStatus();
```

#### Practical Question 1 --- Concept practice

Await a function returning 200 and store the result.

#### Practical Question 2 --- Simple QA/real-world practice

What can happen if you forget `await` on a Playwright action?

#### How this is used later in Playwright

Most Playwright actions need `await`.

### 9.5 try/catch

#### Simple explanation

`try/catch` handles errors thrown by synchronous or awaited asynchronous
code.

#### Example

``` javascript
try {
  await login();
} catch (error) {
  console.error(error);
}
```

#### Practical Question 1 --- Concept practice

Wrap an awaited function call in try/catch.

#### Practical Question 2 --- Simple QA/real-world practice

Catch an error and print its message.

#### How this is used later in Playwright

Useful when building helpers that need controlled error handling or
diagnostics.

### 9.6 throw

#### Simple explanation

`throw` creates an error and stops normal execution until caught.

#### Example

``` javascript
if (!token) {
  throw new Error("Token missing");
}
```

#### Practical Question 1 --- Concept practice

Throw an Error when `token` is empty.

#### Practical Question 2 --- Simple QA/real-world practice

Throw an Error when a required username is missing.

#### How this is used later in Playwright

Useful in framework setup and validation helpers.

### 9.7 Promise.all()

#### Simple explanation

`Promise.all()` waits for multiple independent Promises together.

#### Example

``` javascript
const [users, products] = await Promise.all([
  getUsers(),
  getProducts()
]);
```

#### Practical Question 1 --- Concept practice

Run two independent Promise-returning functions together.

#### Practical Question 2 --- Simple QA/real-world practice

Why should dependent operations usually not use Promise.all()?

#### How this is used later in Playwright

Useful for parallel API setup or independent data retrieval.

### 9.8 sequential async operations

#### Simple explanation

Use sequential `await` when one operation depends on another.

#### Example

``` javascript
const user = await createUser();
const order = await createOrder(user.id);
```

#### Practical Question 1 --- Concept practice

Create a user and then create an order using the user's ID.

#### Practical Question 2 --- Simple QA/real-world practice

Explain why the two awaits are sequential.

#### How this is used later in Playwright

Useful for dependent test setup flows.

### 9.9 async error handling

#### Simple explanation

Async errors are handled by awaiting the Promise inside try/catch or
allowing the test runner to report the rejection.

#### Example

``` javascript
try {
  await request();
} catch (error) {
  console.error(error);
}
```

#### Practical Question 1 --- Concept practice

Wrap an awaited failing function in try/catch.

#### Practical Question 2 --- Simple QA/real-world practice

What changes if you call the Promise without `await` inside try/catch?

#### How this is used later in Playwright

This matters when debugging flaky setup and API operations.

### 9.10 parallel vs sequential

#### Simple explanation

Run independent async work in parallel; run dependent work sequentially.

#### Example

``` javascript
const [a, b] = await Promise.all([getA(), getB()]);
```

#### Practical Question 1 --- Concept practice

Identify whether two independent API calls should be parallel or
sequential.

#### Practical Question 2 --- Simple QA/real-world practice

Identify whether create-user then create-order should be parallel or
sequential.

#### How this is used later in Playwright

This is important for fast, reliable Playwright setup.

## 10. JavaScript Modules, Node.js and npm

**Estimated focused time: 6 hours (360 minutes)**

### 10.1 import

#### Simple explanation

`import` brings exported code into a file.

#### Example

``` javascript
import { login } from "./auth";
```

#### Practical Question 1 --- Concept practice

Import a named `login` function.

#### Practical Question 2 --- Simple QA/real-world practice

Import two named helpers from one module.

#### How this is used later in Playwright

Playwright frameworks are usually split into modules.

### 10.2 export

#### Simple explanation

`export` makes code available to another module.

#### Example

``` javascript
export function login() {}
```

#### Practical Question 1 --- Concept practice

Export a function named `login`.

#### Practical Question 2 --- Simple QA/real-world practice

Export a constant named `BASE_URL`.

#### How this is used later in Playwright

Used for Page Objects, helpers, data, and utilities.

### 10.3 default export

#### Simple explanation

A default export is the primary exported value of a module.

#### Example

``` javascript
export default class LoginPage {}
```

#### Practical Question 1 --- Concept practice

Create a default-exported class.

#### Practical Question 2 --- Simple QA/real-world practice

Write the matching default import.

#### How this is used later in Playwright

Common in Page Object files.

### 10.4 package.json

#### Simple explanation

`package.json` describes a Node.js project, dependencies, and scripts.

#### Example

``` javascript
{
  "scripts": {
    "test": "playwright test"
  }
}
```

#### Practical Question 1 --- Concept practice

Add a `test` script that runs Playwright.

#### Practical Question 2 --- Simple QA/real-world practice

Where are project dependencies recorded?

#### How this is used later in Playwright

Do not manually edit generated lockfile contents.

### 10.5 npm install

#### Simple explanation

`npm install` installs packages needed by the project.

#### Example

``` javascript
npm install
```

#### Practical Question 1 --- Concept practice

What should you normally run after cloning a Node project?

#### Practical Question 2 --- Simple QA/real-world practice

`npm install`.

#### How this is used later in Playwright

Essential for setting up a Playwright project.

### 10.6 npm scripts

#### Simple explanation

npm scripts provide short, repeatable project commands.

#### Example

``` javascript
"scripts": { "test:smoke": "npx playwright test --grep @smoke" }
```

#### Practical Question 1 --- Concept practice

Create a `test:smoke` script.

#### Practical Question 2 --- Simple QA/real-world practice

Create a script named `typecheck` that runs `tsc --noEmit`.

#### How this is used later in Playwright

Useful for local and CI execution.

### 10.7 environment variables

#### Simple explanation

Environment variables store environment-specific values outside source
code.

#### Example

``` javascript
const baseUrl = process.env.BASE_URL;
```

#### Practical Question 1 --- Concept practice

Read `BASE_URL` from the environment.

#### Practical Question 2 --- Simple QA/real-world practice

Read an API token from `API_TOKEN`.

#### How this is used later in Playwright

Critical for QA environments and CI/CD.

## 11. TypeScript Fundamentals

**Estimated focused time: 9 hours (540 minutes)**

### 11.1 type annotations

#### Simple explanation

A type annotation tells TypeScript what type a variable should contain.

#### Example

``` javascript
const timeout: number = 30000;
```

#### Practical Question 1 --- Concept practice

Declare a number called `timeout`.

#### Practical Question 2 --- Simple QA/real-world practice

Try assigning a string to that number and observe the TypeScript error.

#### How this is used later in Playwright

Type annotations become important as automation frameworks grow.

### 11.2 string type

#### Simple explanation

`string` represents text.

#### Example

``` javascript
const username: string = "admin";
```

#### Practical Question 1 --- Concept practice

Create a typed `username`.

#### Practical Question 2 --- Simple QA/real-world practice

Create a typed `baseUrl`.

#### How this is used later in Playwright

Common for URLs, credentials, names, and messages.

### 11.3 number type

#### Simple explanation

`number` represents numeric values.

#### Example

``` javascript
const statusCode: number = 200;
```

#### Practical Question 1 --- Concept practice

Create a typed HTTP status code.

#### Practical Question 2 --- Simple QA/real-world practice

Create a typed retry count.

#### How this is used later in Playwright

Common in API testing and configuration.

### 11.4 boolean type

#### Simple explanation

`boolean` represents true or false.

#### Example

``` javascript
const isCI: boolean = false;
```

#### Practical Question 1 --- Concept practice

Create `isLoggedIn: boolean`.

#### Practical Question 2 --- Simple QA/real-world practice

Create `isMobile: boolean`.

#### How this is used later in Playwright

Useful for configuration flags.

### 11.5 array types

#### Simple explanation

TypeScript can specify the type of values allowed in an array.

#### Example

``` javascript
const browsers: string[] = ["chromium", "firefox"];
```

#### Practical Question 1 --- Concept practice

Create a `string[]` of browser names.

#### Practical Question 2 --- Simple QA/real-world practice

Create a `number[]` of status codes.

#### How this is used later in Playwright

Useful for typed test data and API results.

### 11.6 tuple types

#### Simple explanation

A tuple defines a fixed number and order of values.

#### Example

``` javascript
const result: [number, string] = [200, "OK"];
```

#### Practical Question 1 --- Concept practice

Create `[number, string]` for status and message.

#### Practical Question 2 --- Simple QA/real-world practice

Try swapping the types and observe the error.

#### How this is used later in Playwright

Useful for small fixed result pairs.

### 11.7 union types

#### Simple explanation

A union allows a value to be one of several permitted types or values.

#### Example

``` javascript
let browser: "chromium" | "firefox" | "webkit";
```

#### Practical Question 1 --- Concept practice

Create a browser union for Chromium and Firefox.

#### Practical Question 2 --- Simple QA/real-world practice

Create a test-type union for smoke/regression/sanity.

#### How this is used later in Playwright

Excellent for Playwright configuration options.

### 11.8 type aliases

#### Simple explanation

A type alias creates a reusable type definition.

#### Example

``` javascript
type LoginData = {
  username: string;
  password: string;
};
```

#### Practical Question 1 --- Concept practice

Create a `TestConfig` type with `baseUrl` and `timeout`.

#### Practical Question 2 --- Simple QA/real-world practice

Create a variable using that type.

#### How this is used later in Playwright

Useful for test data and API models.

### 11.9 interfaces

#### Simple explanation

An interface describes the shape of an object.

#### Example

``` javascript
interface User {
  id: number;
  name: string;
}
```

#### Practical Question 1 --- Concept practice

Create an interface for a user with id and email.

#### Practical Question 2 --- Simple QA/real-world practice

Create a variable using the interface.

#### How this is used later in Playwright

Useful for API response/request models.

### 11.10 optional properties

#### Simple explanation

A `?` makes an object property optional.

#### Example

``` javascript
interface User {
  name: string;
  phone?: string;
}
```

#### Practical Question 1 --- Concept practice

Make `phone` optional in a User interface.

#### Practical Question 2 --- Simple QA/real-world practice

Create a User without the optional phone.

#### How this is used later in Playwright

Useful for API responses with optional fields.

### 11.11 readonly

#### Simple explanation

`readonly` prevents a property from being reassigned after creation.

#### Example

``` javascript
interface Config {
  readonly baseUrl: string;
}
```

#### Practical Question 1 --- Concept practice

Create a readonly `baseUrl` property.

#### Practical Question 2 --- Simple QA/real-world practice

Try changing it after creating the object.

#### How this is used later in Playwright

Useful for immutable configuration values.

## 12. Advanced TypeScript

**Estimated focused time: 10 hours (600 minutes)**

### 12.1 literal types

#### Simple explanation

A literal type restricts a value to exact allowed values.

#### Example

``` javascript
type Browser = "chromium" | "firefox" | "webkit";
```

#### Practical Question 1 --- Concept practice

Create a type containing `smoke | regression`.

#### Practical Question 2 --- Simple QA/real-world practice

Try assigning an unsupported test type.

#### How this is used later in Playwright

Useful for browser, environment, and test-type configuration.

### 12.2 enums

#### Simple explanation

Enums give names to a fixed set of constants.

#### Example

``` javascript
enum TestType {
  SMOKE = "smoke",
  REGRESSION = "regression"
}
```

#### Practical Question 1 --- Concept practice

Create an environment enum with DEV and QA.

#### Practical Question 2 --- Simple QA/real-world practice

Read the QA enum value.

#### How this is used later in Playwright

Useful when a named constant set improves readability.

### 12.3 generics

#### Simple explanation

Generics let reusable code preserve the type it receives.

#### Example

``` javascript
function first<T>(items: T[]): T | undefined {
  return items[0];
}
```

#### Practical Question 1 --- Concept practice

Use the generic `first()` function with numbers.

#### Practical Question 2 --- Simple QA/real-world practice

Use it with strings.

#### How this is used later in Playwright

Useful in reusable automation utilities.

### 12.4 keyof

#### Simple explanation

`keyof` creates a type containing the keys of another type.

#### Example

``` javascript
type User = { name: string; email: string };
type UserField = keyof User;
```

#### Practical Question 1 --- Concept practice

Create `UserField` from a User type.

#### Practical Question 2 --- Simple QA/real-world practice

Write a function that accepts only a User key.

#### How this is used later in Playwright

Useful for generic test-data helpers.

### 12.5 Record

#### Simple explanation

`Record<K,V>` describes an object whose keys and values follow specified
types.

#### Example

``` javascript
const urls: Record<string, string> = {
  qa: "https://qa.example.com"
};
```

#### Practical Question 1 --- Concept practice

Create a map of environment names to URLs.

#### Practical Question 2 --- Simple QA/real-world practice

Create a map of browser names to timeout numbers.

#### How this is used later in Playwright

Useful for environment configuration.

### 12.6 Partial

#### Simple explanation

`Partial<T>` makes all properties of a type optional.

#### Example

``` javascript
type UpdateUser = Partial<User>;
```

#### Practical Question 1 --- Concept practice

Create a partial User type.

#### Practical Question 2 --- Simple QA/real-world practice

Create an update object containing only email.

#### How this is used later in Playwright

Useful for PATCH/update API request data.

### 12.7 Pick

#### Simple explanation

`Pick<T,K>` creates a type containing only selected properties.

#### Example

``` javascript
type UserSummary = Pick<User, "name" | "email">;
```

#### Practical Question 1 --- Concept practice

Create a summary containing only `name`.

#### Practical Question 2 --- Simple QA/real-world practice

Create one containing `id` and `email`.

#### How this is used later in Playwright

Useful for focused test data and response models.

### 12.8 Omit

#### Simple explanation

`Omit<T,K>` creates a type without selected properties.

#### Example

``` javascript
type PublicUser = Omit<User, "password">;
```

#### Practical Question 1 --- Concept practice

Remove `password` from a user type.

#### Practical Question 2 --- Simple QA/real-world practice

Remove both `password` and `token`.

#### How this is used later in Playwright

Useful for safe public response/test models.

### 12.9 type narrowing

#### Simple explanation

Type narrowing uses checks to make a union type more specific.

#### Example

``` javascript
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

#### Practical Question 1 --- Concept practice

Narrow a `string | number` value using `typeof`.

#### Practical Question 2 --- Simple QA/real-world practice

Add a number branch that performs a numeric operation.

#### How this is used later in Playwright

Useful when processing unknown API or configuration data.

### 12.10 type guards

#### Simple explanation

A type guard is a check that tells TypeScript a value has a specific
shape.

#### Example

``` javascript
function hasStatus(value: unknown): value is { status: number } {
  return typeof value === "object" && value !== null && "status" in value;
}
```

#### Practical Question 1 --- Concept practice

Create a guard for an object containing an `id`.

#### Practical Question 2 --- Simple QA/real-world practice

Use the guard before reading `id` from an unknown value.

#### How this is used later in Playwright

Useful when validating API data.

## 13. TypeScript for Automation

**Estimated focused time: 8 hours (480 minutes)**

### 13.1 classes

#### Simple explanation

Classes group data and behavior and are commonly used for Page Objects.

#### Example

``` javascript
class LoginPage {
  constructor(private page: Page) {}
}
```

#### Practical Question 1 --- Concept practice

Create a `LoginPage` class that receives `Page`.

#### Practical Question 2 --- Simple QA/real-world practice

Add a simple method to the class.

#### How this is used later in Playwright

Page Objects are a major Playwright pattern.

### 13.2 constructors

#### Simple explanation

A constructor runs when a class instance is created and can receive
dependencies.

#### Example

``` javascript
constructor(private page: Page) {}
```

#### Practical Question 1 --- Concept practice

Create a constructor that accepts `Page`.

#### Practical Question 2 --- Simple QA/real-world practice

Create an instance of the class using a page.

#### How this is used later in Playwright

Used to inject Page, API clients, config, and other dependencies.

### 13.3 public

#### Simple explanation

`public` members can be accessed from outside the class.

#### Example

``` javascript
class User {
  public name = "Naresh";
}
```

#### Practical Question 1 --- Concept practice

Create a public `login()` method.

#### Practical Question 2 --- Simple QA/real-world practice

Call that method from outside the class.

#### How this is used later in Playwright

Useful for actions tests are expected to call.

### 13.4 private

#### Simple explanation

`private` members are intended to be used only inside the class.

#### Example

``` javascript
class User {
  private token = "";
}
```

#### Practical Question 1 --- Concept practice

Make a locator private.

#### Practical Question 2 --- Simple QA/real-world practice

Try to access it from outside the class.

#### How this is used later in Playwright

Useful for hiding selectors and internal state.

### 13.5 protected

#### Simple explanation

`protected` members can be accessed by the class and subclasses.

#### Example

``` javascript
class BasePage {
  protected page: Page;
}
```

#### Practical Question 1 --- Concept practice

Create a BasePage with protected `page`.

#### Practical Question 2 --- Simple QA/real-world practice

Create a child page class that uses it.

#### How this is used later in Playwright

Useful when using a BasePage pattern.

### 13.6 class methods

#### Simple explanation

Methods are functions inside classes and represent reusable actions.

#### Example

``` javascript
async login(username: string, password: string) {
  // actions
}
```

#### Practical Question 1 --- Concept practice

Create a `logout()` method.

#### Practical Question 2 --- Simple QA/real-world practice

Create a `search(term)` method.

#### How this is used later in Playwright

Page Object actions are usually methods.

### 13.7 typed function parameters

#### Simple explanation

Typed parameters make helper contracts explicit.

#### Example

``` javascript
function login(username: string, password: string) {}
```

#### Practical Question 1 --- Concept practice

Type a function accepting a browser name.

#### Practical Question 2 --- Simple QA/real-world practice

Create a helper accepting a timeout number.

#### How this is used later in Playwright

Useful for reusable automation helpers.

### 13.8 typed return values

#### Simple explanation

A return type states what a function promises to return.

#### Example

``` javascript
function getStatus(): number {
  return 200;
}
```

#### Practical Question 1 --- Concept practice

Create a helper returning a string.

#### Practical Question 2 --- Simple QA/real-world practice

Create one returning `boolean`.

#### How this is used later in Playwright

Useful for predictable framework APIs.

### 13.9 typed API models

#### Simple explanation

Interfaces/types describe API request and response structures.

#### Example

``` javascript
interface UserResponse {
  id: number;
  name: string;
}
```

#### Practical Question 1 --- Concept practice

Create a UserResponse with id and email.

#### Practical Question 2 --- Simple QA/real-world practice

Create a typed variable representing a response body.

#### How this is used later in Playwright

Useful for API assertions and test data.

## 14. Playwright Foundations

**Estimated focused time: 12 hours (720 minutes)**

### 14.1 test()

#### Simple explanation

`test()` defines a Playwright test.

#### Example

``` javascript
test("login", async ({ page }) => {
  // test steps
});
```

#### Practical Question 1 --- Concept practice

Write a test named `home page`.

#### Practical Question 2 --- Simple QA/real-world practice

Write a test named `login` that receives the `page` fixture.

#### How this is used later in Playwright

This is the entry point for Playwright test scenarios.

### 14.2 page fixture

#### Simple explanation

The `page` fixture provides a ready-to-use browser page.

#### Example

``` javascript
test("home", async ({ page }) => {
  await page.goto("/");
});
```

#### Practical Question 1 --- Concept practice

Navigate to `/login`.

#### Practical Question 2 --- Simple QA/real-world practice

Open `/products` and then check the current URL.

#### How this is used later in Playwright

Most UI Playwright tests use the page fixture.

### 14.3 context fixture

#### Simple explanation

The `context` fixture provides an isolated browser session.

#### Example

``` javascript
test("user", async ({ context }) => {
  const page = await context.newPage();
});
```

#### Practical Question 1 --- Concept practice

Create a second page from the context.

#### Practical Question 2 --- Simple QA/real-world practice

Explain why two users can be tested using two contexts.

#### How this is used later in Playwright

Useful for multi-user and session-isolation testing.

### 14.4 request fixture

#### Simple explanation

The `request` fixture sends HTTP requests from Playwright tests.

#### Example

``` javascript
test("users", async ({ request }) => {
  const response = await request.get("/users");
});
```

#### Practical Question 1 --- Concept practice

Send a GET request to `/users`.

#### Practical Question 2 --- Simple QA/real-world practice

Read the response status.

#### How this is used later in Playwright

Useful for API tests and fast setup.

### 14.5 locators

#### Simple explanation

Locators identify elements. Prefer stable, user-facing locators.

#### Example

``` javascript
page.getByRole("button", { name: "Login" })
```

#### Practical Question 1 --- Concept practice

Create a locator for a Login button.

#### Practical Question 2 --- Simple QA/real-world practice

Create a locator for an Email input.

#### How this is used later in Playwright

Good locators are essential for stable automation.

### 14.6 getByRole()

#### Simple explanation

`getByRole()` locates elements by accessible role and name.

#### Example

``` javascript
page.getByRole("button", { name: "Submit" })
```

#### Practical Question 1 --- Concept practice

Locate a button named `Save`.

#### Practical Question 2 --- Simple QA/real-world practice

Locate a checkbox named `Remember me`.

#### How this is used later in Playwright

Often the preferred locator for buttons, links, headings, and form
controls.

### 14.7 getByLabel()

#### Simple explanation

`getByLabel()` locates form controls through their associated label.

#### Example

``` javascript
page.getByLabel("Email")
```

#### Practical Question 1 --- Concept practice

Fill an Email field.

#### Practical Question 2 --- Simple QA/real-world practice

Fill a Password field.

#### How this is used later in Playwright

Useful for login and form testing.

### 14.8 getByTestId()

#### Simple explanation

`getByTestId()` locates an element using an agreed test id.

#### Example

``` javascript
page.getByTestId("submit")
```

#### Practical Question 1 --- Concept practice

Click an element with test id `submit`.

#### Practical Question 2 --- Simple QA/real-world practice

Locate a product card using a test id.

#### How this is used later in Playwright

Useful when semantic locators are not stable or available.

### 14.9 click()

#### Simple explanation

`click()` performs a click action.

#### Example

``` javascript
await page.getByRole("button", { name: "Login" }).click();
```

#### Practical Question 1 --- Concept practice

Click a Save button.

#### Practical Question 2 --- Simple QA/real-world practice

Click a Login button and then navigate to the dashboard.

#### How this is used later in Playwright

One of the most common Playwright actions.

### 14.10 fill()

#### Simple explanation

`fill()` sets text in an input or textarea.

#### Example

``` javascript
await page.getByLabel("Email").fill("user@test.com");
```

#### Practical Question 1 --- Concept practice

Fill username with `admin`.

#### Practical Question 2 --- Simple QA/real-world practice

Fill an email field with `test@example.com`.

#### How this is used later in Playwright

Core action for form automation.

### 14.11 assertions

#### Simple explanation

Assertions verify expected behavior.

#### Example

``` javascript
await expect(page.getByText("Success")).toBeVisible();
```

#### Practical Question 1 --- Concept practice

Assert that `Success` is visible.

#### Practical Question 2 --- Simple QA/real-world practice

Assert that the page title is `Dashboard`.

#### How this is used later in Playwright

Assertions are the heart of useful automated tests.

### 14.12 auto-waiting

#### Simple explanation

Playwright automatically waits for many actionability and assertion
conditions.

#### Example

``` javascript
await expect(page.getByRole("button", { name: "Save" })).toBeEnabled();
```

#### Practical Question 1 --- Concept practice

Wait for a Success message using an assertion.

#### Practical Question 2 --- Simple QA/real-world practice

Wait for a button to become enabled.

#### How this is used later in Playwright

One of Playwright's major reliability advantages.

### 14.13 waitForTimeout()

#### Simple explanation

`waitForTimeout()` pauses for a fixed amount of time and should usually
be avoided.

#### Example

``` javascript
await page.waitForTimeout(1000);
```

#### Practical Question 1 --- Concept practice

Replace a 5-second wait with a visibility assertion.

#### Practical Question 2 --- Simple QA/real-world practice

Explain why fixed waits can make tests slow.

#### How this is used later in Playwright

Use condition-based Playwright waits instead.

### 14.14 browser

#### Simple explanation

A browser is the browser process such as Chromium, Firefox, or WebKit.

#### Example

``` javascript
const browser = await chromium.launch();
```

#### Practical Question 1 --- Concept practice

Name the three Playwright browser engines.

#### Practical Question 2 --- Simple QA/real-world practice

What is a context created from?

#### How this is used later in Playwright

Useful when creating custom browser setup.

### 14.15 browser context

#### Simple explanation

A browser context is an isolated browser session.

#### Example

``` javascript
const context = await browser.newContext();
```

#### Practical Question 1 --- Concept practice

Create two isolated contexts.

#### Practical Question 2 --- Simple QA/real-world practice

Why would two users need separate contexts?

#### How this is used later in Playwright

Important for multi-user and authentication testing.

### 14.16 page

#### Simple explanation

A page represents a tab within a browser context.

#### Example

``` javascript
const page = await context.newPage();
```

#### Practical Question 1 --- Concept practice

Create a new page.

#### Practical Question 2 --- Simple QA/real-world practice

Open two pages in the same context.

#### How this is used later in Playwright

The page is where most UI actions happen.

## 15. Professional Playwright Framework

**Estimated focused time: 10 hours (600 minutes)**

### 15.1 Page Object Model

#### Simple explanation

A Page Object keeps page locators and actions in a reusable class.

#### Example

``` javascript
class LoginPage {
  constructor(private page: Page) {}
}
```

#### Practical Question 1 --- Concept practice

Create a LoginPage with a `login()` method.

#### Practical Question 2 --- Simple QA/real-world practice

Create a `DashboardPage` with a `getTitle()` method.

#### How this is used later in Playwright

A core maintainability pattern for Playwright.

### 15.2 custom fixtures

#### Simple explanation

Custom fixtures provide reusable setup and dependencies.

#### Example

``` javascript
const test = base.extend({
  // custom fixture
});
```

#### Practical Question 1 --- Concept practice

Design a fixture that provides a configured page.

#### Practical Question 2 --- Simple QA/real-world practice

Design a fixture that provides test data.

#### How this is used later in Playwright

Useful for authentication, page objects, API clients, and data.

### 15.3 playwright.config.ts

#### Simple explanation

The config file centralizes settings such as base URL, projects,
retries, and reporters.

#### Example

``` javascript
export default defineConfig({
  use: { baseURL: process.env.BASE_URL }
});
```

#### Practical Question 1 --- Concept practice

Set `baseURL` from an environment variable.

#### Practical Question 2 --- Simple QA/real-world practice

Add an HTML reporter.

#### How this is used later in Playwright

The main configuration point for a Playwright framework.

### 15.4 projects

#### Simple explanation

Projects let you run the same tests under different browsers or
configurations.

#### Example

``` javascript
projects: [
  { name: "chromium" },
  { name: "firefox" }
]
```

#### Practical Question 1 --- Concept practice

Create Chromium and Firefox projects.

#### Practical Question 2 --- Simple QA/real-world practice

Create a mobile project using a device configuration.

#### How this is used later in Playwright

Useful for cross-browser coverage.

### 15.5 test data

#### Simple explanation

Test data is the input used by tests and should be separated from test
logic.

#### Example

``` javascript
const user = { username: "admin", password: "secret" };
```

#### Practical Question 1 --- Concept practice

Create login test data as an object.

#### Practical Question 2 --- Simple QA/real-world practice

Create two users in an array.

#### How this is used later in Playwright

Important for scalable test suites.

### 15.6 data-driven tests

#### Simple explanation

Data-driven testing runs the same scenario with multiple data records.

#### Example

``` javascript
for (const user of users) {
  test(`login ${user.username}`, async ({ page }) => {
    // test
  });
}
```

#### Practical Question 1 --- Concept practice

Create two test records and describe how the same scenario would run for
both.

#### Practical Question 2 --- Simple QA/real-world practice

Explain why copying the same test twice is less maintainable.

#### How this is used later in Playwright

Useful for broad input coverage.

### 15.7 API testing

#### Simple explanation

Playwright can send API requests using the request fixture.

#### Example

``` javascript
const response = await request.get("/users");
expect(response.status()).toBe(200);
```

#### Practical Question 1 --- Concept practice

Write a GET request and check status 200.

#### Practical Question 2 --- Simple QA/real-world practice

Send a POST request using a small JSON body.

#### How this is used later in Playwright

Useful for full-stack QA coverage.

### 15.8 authentication state

#### Simple explanation

Storage state allows tests to reuse an authenticated browser session.

#### Example

``` javascript
await context.storageState({
  path: "playwright/.auth/user.json"
});
```

#### Practical Question 1 --- Concept practice

Describe how you would save an authenticated state.

#### Practical Question 2 --- Simple QA/real-world practice

Explain one benefit and one risk of reusing auth state.

#### How this is used later in Playwright

Useful for faster authenticated test suites.

### 15.9 trace

#### Simple explanation

A Playwright trace captures detailed execution information for
debugging.

#### Example

``` javascript
use: { trace: "on-first-retry" }
```

#### Practical Question 1 --- Concept practice

Configure trace on first retry.

#### Practical Question 2 --- Simple QA/real-world practice

Explain when you would inspect a trace.

#### How this is used later in Playwright

Very useful for investigating CI failures.

### 15.10 HTML report

#### Simple explanation

The HTML report provides a readable view of test results and
diagnostics.

#### Example

``` javascript
reporter: "html"
```

#### Practical Question 1 --- Concept practice

Configure the HTML reporter.

#### Practical Question 2 --- Simple QA/real-world practice

Name two pieces of information a useful report should help you find.

#### How this is used later in Playwright

Useful for test execution visibility.

### 15.11 CI execution

#### Simple explanation

CI runs the automation suite automatically after code changes.

#### Example

``` javascript
npx tsc --noEmit
npx playwright test
```

#### Practical Question 1 --- Concept practice

Create a command sequence that type-checks then runs Playwright.

#### Practical Question 2 --- Simple QA/real-world practice

Why should CI run the same reliable commands as local development?

#### How this is used later in Playwright

This is where the JavaScript/TypeScript foundation becomes production
automation.

### 15.12 code quality

#### Simple explanation

Good automation avoids duplication, hardcoded secrets, fragile
selectors, unnecessary waits, and oversized helpers.

#### Example

``` javascript
await expect(page.getByRole("button", { name: "Save" })).toBeVisible();
```

#### Practical Question 1 --- Concept practice

List five things you would look for in a Playwright code review.

#### Practical Question 2 --- Simple QA/real-world practice

Take a test with a hardcoded secret, fixed waits, and brittle selectors
and identify improvements.

#### How this is used later in Playwright

Professional QA automation depends as much on design quality as test
coverage.

## Combined Practice --- Only After Prerequisites Are Covered

Once you have completed Functions + Arrays + Objects + Async/Await +
TypeScript + Playwright basics, start combining concepts.

### 15.13 Example 1 --- JavaScript + arrays + functions

``` javascript
function createTestName(name) {
  return `Test - ${name}`;
}

const tests = ["login", "checkout", "search"];
const names = tests.map(createTestName);

console.log(names);
```

### 15.14 Example 2 --- TypeScript + test data

``` typescript
type LoginData = {
  username: string;
  password: string;
};

const user: LoginData = {
  username: "admin",
  password: "secret"
};
```

### 15.15 Example 3 --- Playwright + Page Object

``` typescript
class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.getByLabel("Username").fill(username);
    await this.page.getByLabel("Password").fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
```

These larger exercises deliberately come later. They are not used as the
first exercise for an individual concept.

## Suggested Weekly Plan

  -----------------------------------------------------------------------
  Week                    Focus                   Goal
  ----------------------- ----------------------- -----------------------
  1                       JavaScript              Variables, types,
                          fundamentals +          strings, operators
                          operators               

  2                       Control flow +          Conditions, loops,
                          functions               functions

  3                       Arrays                  Arrays + array methods

  4                       Objects + modern        Objects, destructuring,
                          JavaScript              spread/rest

  5                       Advanced JS + async     Scope, closures,
                                                  Promises, async/await

  6                       Node/npm/modules        Project structure and
                                                  execution

  7                       TypeScript fundamentals Types, interfaces,
                                                  unions

  8                       Advanced TypeScript     Generics and utility
                                                  types

  9                       TypeScript automation   Classes and typed
                                                  framework code

  10                      Playwright foundations  Locators, actions,
                                                  assertions

  11                      Playwright framework    POM, fixtures, config,
                                                  API, auth

  12                      CI + capstone           Reporting, trace, CI,
                                                  framework project
  -----------------------------------------------------------------------

## Capstone Project

Build a small e-commerce automation framework:

-   UI tests: login, search, product details, cart, checkout, logout
-   API tests: users, products, orders
-   TypeScript interfaces/types for test data and API models
-   Page Object Model
-   Custom fixtures
-   Authentication state
-   Chromium + Firefox projects
-   HTML reporting
-   Trace on retry
-   Environment-based configuration
-   CI execution

## Method Coverage Note

This revision explicitly expands the methods that were previously grouped too broadly. In particular, String, Number, Array, and Object methods are now taught individually with an explanation, example, two practical questions, and later Playwright usage.

The curriculum focuses on **current, practical JavaScript methods relevant to QA automation**. Deprecated/legacy methods such as `substr()` and old `Object.prototype` helpers are included only so you can recognize them in existing code, not as methods to prefer in new code.

For current JavaScript reference coverage, MDN distinguishes instance methods from static methods and documents the current String, Array, Object, and Number APIs.

## Final Pro-Level Goal

By the end, you should be able to **write, read, debug, review, and
design** JavaScript/TypeScript Playwright automation --- not just copy
Playwright examples.

### 15.16 Final competency checklist

-   [ ] Explain JavaScript variable declarations, values, data types,
    and strings.
-   [ ] Understand arithmetic, comparison, and logical operators.
-   [ ] Use conditions, loops, and functions confidently.
-   [ ] Use `map`, `filter`, `find`, `some`, `every`, `includes`, and
    `forEach` correctly.
-   [ ] Work confidently with objects, destructuring, spread/rest, and
    modern JavaScript.
-   [ ] Explain Promises, async/await, error handling, and parallel vs
    sequential execution.
-   [ ] Use modules, npm scripts, package.json, and environment
    variables.
-   [ ] Write TypeScript using annotations, unions, aliases, interfaces,
    generics, and utility types.
-   [ ] Build classes and Page Objects with appropriate access
    modifiers.
-   [ ] Write Playwright tests using fixtures, resilient locators,
    actions, and assertions.
-   [ ] Build a maintainable framework with config, projects, fixtures,
    API testing, auth, reporting, trace, and CI.

------------------------------------------------------------------------

## Combined Practice — Only After Prerequisites Are Covered

Once you have completed Functions + Arrays + Objects + Async/Await + TypeScript + Playwright basics, start combining concepts.

### Example 1 — JavaScript + arrays + functions

```javascript
function createTestName(name) {
  return `Test - ${name}`;
}

const tests = ["login", "checkout", "search"];
const names = tests.map(createTestName);

console.log(names);
```

### Example 2 — TypeScript + test data

```typescript
type LoginData = {
  username: string;
  password: string;
};

const user: LoginData = {
  username: "admin",
  password: "secret"
};
```

### Example 3 — Playwright + Page Object

```typescript
class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.getByLabel("Username").fill(username);
    await this.page.getByLabel("Password").fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
```

These larger exercises deliberately come later. They are not used as the first exercise for an individual concept.

## Suggested Weekly Plan

| Week | Focus | Goal |
|---|---|---|
| 1 | JavaScript fundamentals + data types | Variables, types, strings, numbers |
| 2 | Operators + control flow + functions | Conditions, loops, functions |
| 3 | Arrays | Arrays + array methods |
| 4 | Objects + modern JavaScript | Objects, destructuring, spread/rest |
| 5 | Advanced JS + async | Scope, closures, Promises, async/await |
| 6 | Node/npm/modules | Project structure and execution |
| 7 | TypeScript fundamentals | Types, interfaces, unions |
| 8 | Advanced TypeScript | Generics and utility types |
| 9 | TypeScript automation | Classes and typed framework code |
| 10 | Playwright foundations | Locators, actions, assertions |
| 11 | Playwright framework | POM, fixtures, config, API, auth |
| 12 | CI + capstone | Reporting, trace, CI, framework project |

## Capstone Project

Build a small e-commerce automation framework:

- UI tests: login, search, product details, cart, checkout, logout
- API tests: users, products, orders
- TypeScript interfaces/types for test data and API models
- Page Object Model
- Custom fixtures
- Authentication state
- Chromium + Firefox projects
- HTML reporting
- Trace on retry
- Environment-based configuration
- CI execution

## Final Pro-Level Goal

By the end, you should be able to **write, read, debug, review, and design** JavaScript/TypeScript Playwright automation — not just copy Playwright examples.

### Final competency checklist

- [ ] Explain JavaScript variable declarations, values, data types, and type checking.
- [ ] Use operators, conditions, loops, and functions confidently.
- [ ] Use String, Number, Array, Object, Date, Set, and Map methods appropriately.
- [ ] Explain Promises, async/await, error handling, and parallel vs sequential execution.
- [ ] Use modules, npm scripts, package.json, and environment variables.
- [ ] Write TypeScript using annotations, unions, aliases, interfaces, generics, and utility types.
- [ ] Build classes and typed automation components.
- [ ] Write Playwright tests using fixtures, resilient locators, actions, and assertions.
- [ ] Build a maintainable framework with config, projects, fixtures, API testing, auth, reporting, trace, and CI.



## Answer Key

### How to use the answers

First solve each question yourself. Then compare your solution with the concept being tested. Multiple correct implementations are possible unless the question asks for a specific result.

### 1.1 Variables: let

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 1.2 Variables: const

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 1.3 Variables: var

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 1.4 Template literals

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.1 Strings

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.2 Numbers

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.3 Booleans

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.4 null

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.5 undefined

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.6 BigInt

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.7 Symbol

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.8 Object

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.1 length

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.2 charAt()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.3 at()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.4 charCodeAt()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.5 codePointAt()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.6 concat()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.7 includes()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.8 startsWith()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.9 endsWith()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.10 indexOf()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.11 lastIndexOf()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.12 slice()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.13 substring()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.14 substr()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.15 toLowerCase()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.16 toUpperCase()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.17 toLocaleLowerCase()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.18 toLocaleUpperCase()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.19 trim()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.20 trimStart()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.21 trimEnd()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.22 replace()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.23 replaceAll()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.24 split()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.25 repeat()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.26 padStart()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.27 padEnd()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.28 match()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.29 matchAll()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.30 search()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.31 localeCompare()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.32 normalize()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.33 isWellFormed()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.34 toWellFormed()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.35 toString()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.36 valueOf()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.37 String.fromCharCode()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.38 String.fromCodePoint()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.9.39 String.raw()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.10.1 Number.isFinite()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.10.2 Number.isInteger()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.10.3 Number.isNaN()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.10.4 Number.isSafeInteger()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.10.5 Number.parseInt()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.10.6 Number.parseFloat()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.10.7 toFixed()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.10.8 toPrecision()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.10.9 Number.prototype.toString()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.11 typeof and type checking

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 2.12 Primitive vs object values

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 3.1 Arithmetic operators

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 3.2 Comparison operators

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 3.3 Assignment operators

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 3.4 Logical AND: &&

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 3.5 Logical OR: ||

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 3.6 Logical NOT: !

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 3.7 Nullish coalescing: ??

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 3.8 Optional chaining: ?.

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 3.9 Increment and decrement: ++ / --

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 4.1 if

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 4.2 else

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 4.3 else if

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 4.4 Ternary operator

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 4.5 for loop

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 4.6 while loop

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 4.7 for...of

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 4.8 for...in

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 4.9 Function declaration

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 4.10 Function parameters

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 4.11 return

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 4.12 Arrow functions

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.1 Arrays

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.1 at()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.2 concat()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.3 copyWithin()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.4 entries()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.5 every()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.6 fill()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.7 filter()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.8 find()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.9 findIndex()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.10 findLast()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.11 findLastIndex()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.12 flat()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.13 flatMap()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.14 forEach()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.15 includes()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.16 indexOf()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.17 join()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.18 keys()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.19 lastIndexOf()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.20 map()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.21 pop()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.22 push()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.23 reduce()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.24 reduceRight()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.25 reverse()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.26 shift()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.27 slice()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.28 some()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.29 sort()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.30 splice()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.31 toReversed()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.32 toSorted()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.33 toSpliced()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.34 unshift()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.35 values()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.36 Array.prototype.toString()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.37 Array.prototype.toLocaleString()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.38 with()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.39 Array.from()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.40 Array.fromAsync()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.41 Array.isArray()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 5.2.42 Array.of()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.1 Objects

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.2 Dot notation

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.3 Bracket notation

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.4 Object destructuring

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.5 Array destructuring

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.6 spread operator

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.7 rest parameter

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.1 Object.keys()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.2 Object.values()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.3 Object.entries()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.4 Object.fromEntries()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.5 Object.assign()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.6 Object.hasOwn()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.7 Object.groupBy()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.8 Object.getOwnPropertyNames()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.9 Object.getOwnPropertySymbols()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.10 Object.getOwnPropertyDescriptor()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.11 Object.getOwnPropertyDescriptors()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.12 Object.getPrototypeOf()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.13 Object.setPrototypeOf()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.14 Object.create()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.15 Object.defineProperty()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.16 Object.defineProperties()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.17 Object.preventExtensions()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.18 Object.isExtensible()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.19 Object.seal()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.20 Object.isSealed()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.21 Object.freeze()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.22 Object.isFrozen()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.23 Object.is()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.24 Object.prototype.hasOwnProperty()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.25 Object.prototype.toString()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.26 Object.prototype.toLocaleString()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 6.8.27 Object.prototype.valueOf()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 7.1 scope

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 7.2 closures

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 7.3 this

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 7.4 callbacks

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 7.5 higher-order functions

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 7.6 type coercion

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.1 JSON.parse()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.2 JSON.stringify()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.3 Math.round()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.4 Math.floor()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.5 Math.ceil()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.6 Math.max()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.7 Math.min()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.8 Math.abs()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.9 Math.random()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.10 Math.pow()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.11 Math.sqrt()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.12 Date.getTime()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.13 Date.toISOString()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.14 RegExp.test()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.15 RegExp.exec()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.16 Set

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.17 Map

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.13.1 getFullYear()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.13.2 getMonth()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.13.3 getDate()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.13.4 getDay()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.13.5 getHours()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.13.6 getMinutes()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.13.7 getTime()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.13.8 toISOString()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.14.1 add()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.14.2 has()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.14.3 delete()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.14.4 clear()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.14.5 values()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.14.6 keys()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.14.7 entries()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.14.8 size

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.15.1 set()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.15.2 get()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.15.3 has()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.15.4 delete()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.15.5 clear()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.15.6 keys()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.15.7 values()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.15.8 entries()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.15.9 forEach()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 8.15.10 size

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 9.1 Promises

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 9.2 Promise states

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 9.3 async functions

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 9.4 await

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 9.5 try/catch

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 9.6 throw

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 9.7 Promise.all()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 9.8 sequential async operations

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 9.9 async error handling

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 9.10 parallel vs sequential

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 10.1 import

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 10.2 export

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 10.3 default export

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 10.4 package.json

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 10.5 npm install

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 10.6 npm scripts

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 10.7 environment variables

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 11.1 type annotations

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 11.2 string type

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 11.3 number type

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 11.4 boolean type

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 11.5 array types

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 11.6 tuple types

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 11.7 union types

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 11.8 type aliases

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 11.9 interfaces

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 11.10 optional properties

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 11.11 readonly

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 12.1 literal types

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 12.2 enums

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 12.3 generics

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 12.4 keyof

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 12.5 Record

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 12.6 Partial

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 12.7 Pick

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 12.8 Omit

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 12.9 type narrowing

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 12.10 type guards

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 13.1 classes

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 13.2 constructors

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 13.3 public

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 13.4 private

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 13.5 protected

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 13.6 class methods

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 13.7 typed function parameters

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 13.8 typed return values

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 13.9 typed API models

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 14.1 test()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 14.2 page fixture

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 14.3 context fixture

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 14.4 request fixture

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 14.5 locators

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 14.6 getByRole()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 14.7 getByLabel()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 14.8 getByTestId()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 14.9 click()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 14.10 fill()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 14.11 assertions

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 14.12 auto-waiting

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 14.13 waitForTimeout()

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 14.14 browser

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 14.15 browser context

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 14.16 page

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 15.1 Page Object Model

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 15.2 custom fixtures

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 15.3 playwright.config.ts

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 15.4 projects

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 15.5 test data

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 15.6 data-driven tests

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 15.7 API testing

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 15.8 authentication state

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 15.9 trace

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 15.10 HTML report

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 15.11 CI execution

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.

### 15.12 code quality

**Q1 — Suggested answer / expected approach**

Use the concept taught in this sub-topic and only prerequisites already covered. The expected result is the behavior requested in the question.

**Q2 — Suggested answer / expected approach**

Apply the same concept to the QA/real-world scenario. Equivalent correct solutions are acceptable.
