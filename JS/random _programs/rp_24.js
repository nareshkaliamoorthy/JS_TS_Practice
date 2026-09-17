// Write a JavaScript program to:

// Verify that the API status is 200.
// Find all active QA users.
// Return only their names.
// Print the result.
// Expected output
// API Status: Passed
// Active QA Users:
// Naresh
// Magesh
// Constraints
// Use filter()
// Use map()


const response = {
    status: 200,
    users: [
        { id: 101, name: "Naresh", role: "QA", active: true },
        { id: 102, name: "Arun", role: "Developer", active: false },
        { id: 103, name: "Magesh", role: "QA", active: true },
        { id: 104, name: "Priya", role: "Manager", active: true },
        { id: 105, name: "Kumar", role: "QA", active: false }
    ]
};

if (response.status === 200) {
    console.log("API Status: Passed")
    const active_users = response.users
        .filter(user => user.active && user.role === "QA")
        .map(user => user.name);
    console.log("Active QA Users:")
    active_users.forEach(name => console.log(name))
};

