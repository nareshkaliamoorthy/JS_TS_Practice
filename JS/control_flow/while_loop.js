
// Write a while loop that starts 
// with count = 0 and increments count until it reaches 5.
let count = 0
while (count < 5) {
    ++count;
    console.log("ATTEMPT: ", count)
}

// Write a JavaScript program using only a while loop
// to calculate and print the sum of all even numbers from 1 to 50.

let num = 0;
let total = 0;
while (num <= 50) {
    if (num % 2 === 0) {
        total = total + num;
    }
    num++;
}
console.log(total)
