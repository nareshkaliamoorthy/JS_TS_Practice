// Write a program using reduce() to find the API with the highest response time.

// Expected Output
// Endpoint: /search
// Response Time: 1500

const responseTimes = [
    { endpoint: "/login", time: 450 },
    { endpoint: "/users", time: 1200 },
    { endpoint: "/products", time: 300 },
    { endpoint: "/orders", time: 850 },
    { endpoint: "/search", time: 1500 }
];

const high_response_time = responseTimes.reduce((highest, current) => {
    if (highest.time > current.time) {
        return highest;
    }
    else {
        return current;
    }
});
console.log("Endpoint:", high_response_time.endpoint);
console.log("Response Time:", high_response_time.time);