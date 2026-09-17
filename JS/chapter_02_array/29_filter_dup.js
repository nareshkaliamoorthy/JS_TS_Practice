let obj = [1, 2, 2, 3, 3, 3, 7, 8]
//remove duplicates
let new_obj = obj.filter((value, index) => obj.indexOf(value) === index)
console.log(new_obj)

