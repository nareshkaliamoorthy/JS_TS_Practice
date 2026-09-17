
// Write a program to:

// Check whether the message contains the word "successful".
// If it does, convert all usernames to uppercase.
// Print the resulting array.
// Expected output
// true
// ["NARESH", "MAGESH", "ARUN", "PRIYA"]
// Constraints

// Use:

// A string method to check the message.
// map() for the usernames.

// No for loop.

const response = {
    message: "Login successful",
    users: ["Naresh", "Magesh", "Arun", "Priya"]
};

const check_message = response.message.includes("successful")
console.log(check_message)

if (check_message) {
    const upper_users = response.users.map(user => user.toUpperCase());
    console.log(upper_users)
}