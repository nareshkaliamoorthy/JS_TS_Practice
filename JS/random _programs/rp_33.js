// Determine whether every test case has only PASS results.

// Expected output:

// false

const testCases = [
    { id: 101, title: "Login", results: ["PASS", "PASS"] },
    { id: 102, title: "Search", results: ["PASS", "PASS"] },
    { id: 103, title: "Checkout", results: ["PASS", "PASS"] },
    { id: 104, title: "Profile", results: ["PASS", "FAIL"] }
];

const pass_check = testCases.every(test => !test.results.includes("FAIL"));
console.log(pass_check);