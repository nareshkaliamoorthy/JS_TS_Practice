// Write a JavaScript function to count the number of vowels (a, e, i, o, u) in a string.
// input = "Automation"
// Constraint: Use a loop and basic JavaScript (don't use regex).

let input = "Automation";
let vowels = ['a', 'e', 'i', 'o', 'u'];
const arr_input = input.split("");
const vowel_arr = []
for (char of arr_input) {
    if (vowels.includes(char)) {
        vowel_arr.push(char);
    }
}
console.log(vowel_arr.length);

