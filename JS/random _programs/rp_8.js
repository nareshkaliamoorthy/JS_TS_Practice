// Write a JavaScript program to:

// Calculate the average response time.
// Print the average rounded to 2 decimal places.
// Determine whether the performance is acceptable.
// Rule
// Average ≤ 500 → Performance Good
// Average > 500 → Performance Poor
// const responseTimes = [120, 450, 230, 890, 310, 150];

// Expected Output
// Average: 358.33
// Performance Good

const responseTimes = [120, 450, 230, 890, 310, 150];
let total = 0;
for (const num of responseTimes) {
    total = total + num

}
let average = Number(total / responseTimes.length).toFixed(2);
if (average <= 500) {
    console.log("Average:", average);
    console.log("Performance is Good");
}
else {
    console.log("Performance is Poor");
}