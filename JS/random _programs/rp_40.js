const str = "madam"; //palindrome

let str_arr = str.split("");
const reverse_str = str_arr.reverse().join("");
console.log(reverse_str);
if (reverse_str === str) {
    console.log("Plaindrome");
}
else {
    console.log("Not a Palindrome");
}