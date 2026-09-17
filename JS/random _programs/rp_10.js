// Write a JavaScript program to:
// Find only active users.
// From those active users, return only their names.

// Expected output
// ["Naresh", "Arun", "Priya"]

// Constraints
// Use filter().
// Use map().
// Don't use a for loop.
// Try to do it using method chaining.

const users = [
    { name: "Naresh", age: 35, active: true },
    { name: "Magesh", age: 28, active: false },
    { name: "Arun", age: 42, active: true },
    { name: "Priya", age: 31, active: true }
];

let active_users = users.filter(user => user.active)
console.log(active_users)
const user_names = active_users.map(user_name => user_name.name)
console.log(user_names)