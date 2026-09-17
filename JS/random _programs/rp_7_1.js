// Write a JavaScript program to find all duplicate elements in an array.

// Input:

// [1, 2, 3, 2, 4, 5, 1, 3]

// Expected output:

// 2
// 1
// 3

// Constraints:

// Don't use Set.
// Don't use filter().
// Use loops and basic JavaScript.
// Each duplicate should be printed only once.

let input = [1, 2, 3, 2, 4, 5, 1, 3];
let input_count = {};
for (const num of input) {
    if (!input_count[num]) {
        input_count[num] = 1;
    }
    else {
        input_count[num]++;
    }
}
//console.log(input_count);
for (const key in input_count) {
    if (input_count[key] > 1) {
        console.log(key);
    }
}
