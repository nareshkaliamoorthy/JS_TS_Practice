// Use reduce() to find the largest number:
const numbers = [25, 10, 45, 30, 60, 98, 0, 15];

const largest = numbers.reduce((largest_num, current) => {
    if (largest_num > current) {
        return largest_num;
    }
    else {
        return current;
    }
});
console.log(largest)