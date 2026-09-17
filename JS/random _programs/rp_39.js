const str = "Playwright";
let reverse_str = ""
for (let i = str.length; i > 0; i--) {
    reverse_str = reverse_str + str.charAt(i - 1);

}
console.log(reverse_str);