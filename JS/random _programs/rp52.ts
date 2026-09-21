const input: string = "automAtion";

// Counts the occurrence of each character.
// Returns an object containing each character and its frequency.
// Handles an empty string.
// Expected Output
// {
//     a: 2,
//     u: 1,
//     t: 2,
//     o: 2,
//     m: 1,
//     i: 1,
//     n: 1
// }
const str: string[] = input.split("");
const charCount = str.reduce((char, value) => {
    char[value] = (char[value] || 0) + 1;
    return char;
}, {} as Record<string, number>);
console.log(charCount)
//const sorted = Object.fromEntries(entries)
