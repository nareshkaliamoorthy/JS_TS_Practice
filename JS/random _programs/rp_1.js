// Write a JavaScript function to reverse a string.
// Input: "Playwright"
// Output: "thgirwyalP"

// Constraint: Don't use reverse().

/**solution_1: 
let input = "Playwright";
let input_arr = input.split("")
input_arr.reverse()
let reverse_string = input_arr.join("")
console.log(reverse_string)**/

let input = "Playwright";
arr_input = input.split("");
console.log(arr_input);
let arr_output = []
for (i = arr_input.length; i > 0; i--) {
    arr_output.push(arr_input[i - 1]);

}
console.log(arr_output.join().replaceAll(",", ""));
