export const numbers: number[] = [1, 4, 7];
// Finds the missing number.
// Assumes the numbers range from 1 to N.
// Handles an array where no number is missing.
// using for loop
const maxNum: number = Math.max(...numbers);
const minNum: number = Math.min(...numbers);
console.log(maxNum)
let missingNumbers: number[] = [];
for (let i = minNum; i <= maxNum; i++) {
    if (!numbers.includes(i)) {
        missingNumbers.push(i);
    }
}
console.log(missingNumbers)

//using reduce
let indexGap: number = 0;

const missingNumber: number[] = numbers.reduce((acc: number[], currValue: number) => {
    console.log(numbers.indexOf(currValue) + 1 + indexGap);
    if (numbers.indexOf(currValue) + 1 + indexGap !== currValue) {
        acc.push(numbers.indexOf(currValue) + 1 + indexGap);
        indexGap = indexGap + 1;
    }
    return acc;
}, [])

console.log(missingNumber);