// Write a program to:

// Find all failed tests.
// Sort them by execution time highest → lowest.
// Return only their test IDs.
// Print the IDs.

// expected output: [102, 104]

const testResults = [
    { id: 101, name: "Login", status: "PASS", time: 250 },
    { id: 102, name: "Search", status: "FAIL", time: 800 },
    { id: 103, name: "Checkout", status: "PASS", time: 1200 },
    { id: 104, name: "Profile", status: "FAIL", time: 600 },
    { id: 105, name: "Logout", status: "PASS", time: 300 }
];

const results = testResults
    .filter(res => res.status === "FAIL")
    .sort((a, b) => b.time - a.time)
    .map(res => res.id);
console.log(results);
