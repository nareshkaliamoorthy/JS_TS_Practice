// You receive this API response:

// const response = {
//     status: 200,
//     data: {
//         users: [
//             { id: 101, name: "Naresh", active: true },
//             { id: 102, name: "Magesh", active: false },
//             { id: 103, name: "Arun", active: true }
//         ]
//     }
// };

// Write a JavaScript program to:

// Check whether the API status is 200.
// Find all active users.
// Print their names.

//Expected Output
// API Status: Passed
// Active Users:
// Naresh
// Arun

// Constraints
// Use a loop.
// Don't use filter().
// Don't use forEach().

const response = {
    status: 200,
    data: {
        users: [
            { id: 101, name: "Naresh", active: true },
            { id: 102, name: "Magesh", active: false },
            { id: 103, name: "Arun", active: true }
        ]
    }
};

if (response.status === 200) {
    console.log("API Status: Passed");
    let users = response.data.users;
    console.log("Active Users");
    for (const user of users) {
        if (user.active === true) {
            console.log(user.name);
        }
    }
}
