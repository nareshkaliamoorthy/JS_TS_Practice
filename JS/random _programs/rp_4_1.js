// Write a JavaScript program to find the second largest unique number in an array.
// [10, 5, 30, 20]

let input = [10, -2, -5, -1];
// input.sort((a, b) => b - a);
// console.log(input[1]);
let largest_num = null; //l = 30 sl =10
let second_largest_num = null;
for (const val of input) {
    if (largest_num === null) {
        largest_num = val;
    }
    else if (largest_num > val && (val > second_largest_num || second_largest_num === null)) {
        second_largest_num = val;
    }
    else if (largest_num < val) {
        second_largest_num = largest_num;
        largest_num = val;

    }
}
console.log(largest_num);
console.log(second_largest_num);