// Use reduce() to count how many even numbers are present:
const numbers = [10, 15, 22, 31, 40, 55, 60, 0, 2];

const even_num = numbers.reduce((count, num) => {
    if (num % 2 === 0) {
        count++;
    }
    return count;
}, 0)

console.log(even_num);