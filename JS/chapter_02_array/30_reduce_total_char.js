let obj = ["hi", "hello"]
//total char in words
let total = obj.reduce((acc, word) => acc + word.length, 0)
console.log(total)