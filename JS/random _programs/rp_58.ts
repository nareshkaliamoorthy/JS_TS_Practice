export const num = [-10, 5, -20, -8, -20, -15, -16];
// Find the second-largest number in an array without using sort
let second_largest_value = 0;
const desc_num: Record<string, number> = num.reduce((acc, value) => {
    if (acc["largest"] > value && acc["second_largest"] < value) {
        acc["second_largest"] = value;
    } else if (acc["largest"] < value) {
        acc["second_largest"] = acc["largest"];
        acc["largest"] = value;

    }
    return acc;
}, { largest: -Infinity, second_largest: -Infinity } as Record<string, number>);

console.log(desc_num["second_largest"]);

// Find the second-largest number in an array with using sort

// const desc_n: number[] = num.sort((a, b) => b - a);
// const largest_n = desc_n[0];
// for (const k of desc_n) {
//     if (k !== largest_n) {
//         second_largest_value = k;
//         break;
//     }
// }
console.log(second_largest_value);