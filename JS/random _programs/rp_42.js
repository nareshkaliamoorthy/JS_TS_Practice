const numbers = [10, 5, 8, 2, 15, 3, -2]; //smallest

const smallest = numbers.reduce((smallest_num, current) => smallest_num > current ? current : smallest_num);

console.log(smallest)