const numbers: number[] = [10, 10];
// Finds the second-largest unique number.
// Handles duplicate values.
// Returns the result.
// 15

const secondLargestValue = numbers.reduce((acc, value) => {

    if (value > acc.largest) {
        acc.secondLargest = acc.largest;
        acc.largest = value;
    } else if (value < acc.largest && value > acc.secondLargest) {
        acc.secondLargest = value;
    }
    return acc;
}, { largest: -Infinity, secondLargest: -Infinity })

console.log(secondLargestValue.secondLargest);
if (secondLargestValue.largest === -Infinity || secondLargestValue.secondLargest === -Infinity) {
    throw new Error("No largest/SecondLargest value found")
}

