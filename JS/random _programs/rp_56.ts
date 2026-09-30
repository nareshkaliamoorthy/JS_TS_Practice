const input: string = "aabbccde"
//first non repeating char
let nonRepeatingChar: string = "";
const inp_arr: string[] = input.split("");

const obj_input: Record<string, number> = inp_arr.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
}, {} as Record<string, number>)

for (const key in obj_input) {
    if (obj_input[key] === 1) {
        nonRepeatingChar = key;
        break;
    }
}
console.log(nonRepeatingChar);