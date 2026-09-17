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
const input = [1, 2, 3, 2, 4, 5, 1, 3, 3, 5];
const new_input = [];
const duplicate_num = [];
for (const num of input) {
    if (new_input.includes(num) && !duplicate_num.includes(num)) {
        duplicate_num.push(num);
    }
    else {
        new_input.push(num);
    }
}
// console.log(duplicate_num);
for (const dup_num of duplicate_num) {
    console.log(dup_num);
}

