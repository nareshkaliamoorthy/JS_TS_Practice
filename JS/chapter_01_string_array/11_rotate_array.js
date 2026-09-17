let input = [1, 2, 3, 4, 5, 6, 8, 9]
//output = [4,5,1,2,3]
let new_input = input.slice(-2).concat(input.slice(0, -2))
console.log(new_input)

