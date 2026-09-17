const numbers = [10, 45, 23, 89, 12, 67];

const l_num = numbers.reduce((largest_num, current) =>
    largest_num > current ? largest_num : current
);
console.log(l_num);