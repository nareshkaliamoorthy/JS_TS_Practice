// calculate total using reduce()
const numbers = [10, 20, 30, 40, 50];

const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total)