
// Write a program to find the first bug whose title contains the word "button", ignoring case.

// Expected result:

// 101
// Login button not working
const bugs = [
    { id: 101, title: "Login button not working", severity: "High" },
    { id: 102, title: "Search result incorrect", severity: "Medium" },
    { id: 103, title: "Payment page crash", severity: "Critical" },
    { id: 104, title: "Logout button issue", severity: "High" }
];

const bug_id = bugs.find(bug => bug.title.toLowerCase().includes("button"))
console.log(bug_id.id);
console.log(bug_id.title);