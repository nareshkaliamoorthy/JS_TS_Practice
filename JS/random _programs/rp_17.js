// Use reduce() to calculate the average response time.
const responseTimes = [200, 450, 300, 600, 250];

const sum_response_time = responseTimes.reduce((a, b) => (a + b));
console.log(sum_response_time / responseTimes.length);