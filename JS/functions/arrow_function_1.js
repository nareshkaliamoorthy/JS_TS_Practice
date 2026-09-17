//write a function to add two numbers

// function add(a, b) {
//     return a + b;
// }

const add = (a, b) => {
    console.log("Arrow function: ", (a * b))
};
add(2, 3)

// Write an arrow function that checks whether a number is positive.
const isNumberPositive = (num) => {
    if (num < 0) {
        return false;
    }
    else {
        return true;
    }
}
let num_check = isNumberPositive(-5);
console.log(num_check);