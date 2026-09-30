const input: string = " abcabcde ";

const input_arr = input.trim().split("");

const charCount = input_arr.reduce((acc, currValue) => {
    acc[currValue] = (acc[currValue] || 0) + 1;
    return acc;
}, {} as Record<string, number>);
//console.log(charCount);
let firstNonRepeatChar: string = "";
for (let key in charCount) {
    if (charCount[key] === 1) {
        firstNonRepeatChar = key;
        break;
    }
}
if (firstNonRepeatChar === "") {
    console.log("No Unique Char found")
} else {
    console.log("FirstNonRepeatChar:", firstNonRepeatChar)
}
