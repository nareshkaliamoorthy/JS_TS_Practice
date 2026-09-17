const num = 12.5678;
const num_int = 12;

//Round to 2 decimal places
console.log(num.toFixed(2))
//Convert to string
console.log(num.toString())
console.log(typeof num)
console.log(typeof num.toString())
//Check if integer
console.log(Number.isInteger(num_int))
console.log(typeof num_int)
//Convert "100" to number
let num_string = "100"
console.log(typeof num_string)
console.log(Number.parseInt(num_string))
console.log(typeof Number.parseInt(num_string))