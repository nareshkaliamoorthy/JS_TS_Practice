// You need to find the first test case that has the "critical" tag.

// Task

// Use find() and includes() to return the entire test case.

// Expected output
// {
//     id: 101,
//     title: "Login validation",
//     tags: ["smoke", "critical"]
// }
// Constraints
// Use find()
// Use includes()
// No for loop
// No filter()

const testCases = [
    { id: 101, title: "Login validation", tags: ["smoke", "critical"] },
    { id: 102, title: "Search validation", tags: ["regression"] },
    { id: 103, title: "Checkout validation", tags: ["smoke", "payment"] },
    { id: 104, title: "Logout validation", tags: ["smoke"] }
];

const test_case = testCases.find(test => test.tags.includes("critical"))
console.log(test_case);
