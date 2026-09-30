const numbers: number[] = [1, 3, 2, 3, 2, 4, 5, 1, 6, 3];

// Removes duplicate values.
// Returns a new array containing only unique values.
// Preserves the original order.
// [1, 2, 3, 4, 5, 6]

const uniqValue: number[] = [];
const dup = numbers.filter((value, index) => {
    if (numbers.indexOf(value) === index) {
        uniqValue.push(value);
    }
})
console.log(uniqValue);

//Alternate and efficient solution - using set
const uniqValueUsingSet: number[] = [...new Set(numbers)];
console.log(uniqValueUsingSet)
