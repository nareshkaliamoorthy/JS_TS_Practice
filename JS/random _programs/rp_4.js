// Write a JavaScript program to find the second largest unique number in an array.
// [10, 5, 30, 20]

let input = [10, 5, 30, 20];
// input.sort((a, b) => b - a);
// console.log(input[1]);
let greater_num = null;
let greater_num_2 = null;
for (const val of input) {
    if (greater_num === null) {
        greater_num = val;
    }
    else if (greater_num > val) {
        continue;
    }
    else if (greater_num < val) {
        greater_num = val;
    }
}
console.log(greater_num);
let revised_input = input.filter(number => number !== greater_num);
console.log(revised_input);
for (const val of revised_input) {
    if (greater_num_2 === null) {
        greater_num_2 = val;
    }
    else if (greater_num_2 > val) {
        continue;
    }
    else if (greater_num_2 < val) {
        greater_num_2 = val;
    }
}
console.log(greater_num_2);