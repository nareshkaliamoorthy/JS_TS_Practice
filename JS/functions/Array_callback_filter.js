let numbers = [1, 5, 6, 9, 8, 4, 40]
let evenNumbers = numbers.filter((num) => {
    if (num % 2 === 0) {
        return num;
    }
});
console.log(evenNumbers);

//another way of writing arrow function without curly brackets {}
let numbers_1 = [1, 5, 6, 9, 8, 4, 40]
let evenNumbers_1 = numbers_1.filter((num) => num % 2 === 0);
console.log(evenNumbers_1);