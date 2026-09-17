// Determine whether any test case contains at least one "FAIL" result.

// Expected output:

// true
// Constraints
// Use some()
// Don't use filter()
// Don't use a for loop

const testCases = [
    { id: 101, title: "Login", results: ["PASS", "PASS"] },
    { id: 102, title: "Search", results: ["PASS", "FAIL"] },
    { id: 103, title: "Checkout", results: ["PASS", "PASS"] },
    { id: 104, title: "Profile", results: ["PASS", "PASS"] }
];

const isTestFail = testCases.some(test => test.results.includes("FAIL"));
console.log(isTestFail)