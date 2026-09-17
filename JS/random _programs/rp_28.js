// Determine whether all API responses were successful.

// Consider a response successful when:

// status >= 200 && status < 300

// Expected result:
// false
// Requirements
// Use every()
// No for loop
// No filter()

const responses = [
    { endpoint: "/login", status: 200 },
    { endpoint: "/users", status: 200 },
    { endpoint: "/products", status: 200 },
    { endpoint: "/orders", status: 500 }
];

const api_response = responses.every(response => response.status >= 200 && response.status < 300)
console.log(api_response);