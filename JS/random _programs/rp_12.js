// Write a program using reduce() to calculate the total response time.
// Total Response Time: 4300

const responseTimes = [
    { endpoint: "/login", time: 450 },
    { endpoint: "/users", time: 1200 },
    { endpoint: "/products", time: 300 },
    { endpoint: "/orders", time: 850 },
    { endpoint: "/search", time: 1500 }
];

const total_res = responseTimes.reduce((sum, num) => sum + num.time, 0)
console.log(total_res);