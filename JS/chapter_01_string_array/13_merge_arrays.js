let arr1 = [1, 2]
let arr2 = [2, 3]
//output [1,2,3]

let new_arr = arr1.concat(arr2)
let uniq_arr = [...new Set([...new_arr])]
console.log(uniq_arr)