let num = [4, 7, 2, 99, 54] // output = 9

let max_num = num.reduce((x, y) => x > y ? x : y)
console.log(max_num)