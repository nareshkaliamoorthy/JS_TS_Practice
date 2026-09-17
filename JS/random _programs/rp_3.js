// Write a JavaScript function to 
// find the first non-repeating character in a string.

// input  = "swiss"
// output = "w"

let input = "swissi";

let dummy_obj = {};

for (let alpha of input) {
    if (!dummy_obj[alpha]) {
        dummy_obj[alpha] = 1;
    }
    else {
        dummy_obj[alpha]++;
    }
}
console.log(dummy_obj);
let non_repeat_char = null;
for (let chars in dummy_obj) {
    if (dummy_obj[chars] === 1) {
        console.log(chars);
        non_repeat_char = chars;
        break;
    }

}
if (non_repeat_char === null) {
    console.log("no char found with non repeating")
}
// 