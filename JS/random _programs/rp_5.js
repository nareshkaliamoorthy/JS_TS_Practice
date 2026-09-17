// Write a JavaScript program to count how many times each element appears in an array.
// input = ["chrome", "firefox", "chrome", "edge", "chrome", "firefox"]
// output =chrome: 3
// firefox: 2
// edge: 1
// Constraints:

// Don't use reduce().
// Use a loop and an object.
// Try to write it yourself without searching for the solution.

let obj_count = {};
let browsers = ["chrome", "firefox", "chrome", "edge", "chrome", "firefox"]
for (const browser of browsers) {
    if (!obj_count[browser]) {
        obj_count[browser] = 1;
    }
    else {
        obj_count[browser] = obj_count[browser] + 1;
    }
}
console.log(obj_count);