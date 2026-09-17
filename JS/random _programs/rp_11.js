// Write a program to:
// Find only the APIs whose response time is greater than 500 ms.
// Sort those APIs by response time from highest to lowest.
// Print the endpoint names and response times.

// Expected output
// /search - 1500
// /users - 1200
// /orders - 850

// Constraints
//     Use filter().
//     Use sort().
//     Don't use a for loop.
//     Don't modify the original responseTimes array if possible.

const responseTimes = [
    { endpoint: "/login", time: 450 },
    { endpoint: "/users", time: 1200 },
    { endpoint: "/products", time: 300 },
    { endpoint: "/orders", time: 850 },
    { endpoint: "/search", time: 1500 }
];

const endpoints = responseTimes
    .filter(time => time.time > 500)
    .sort((a, b) => b.time - a.time)
    .map(item => `${item.endpoint} - ${item.time}`);
endpoints.forEach(item => console.log(item));
