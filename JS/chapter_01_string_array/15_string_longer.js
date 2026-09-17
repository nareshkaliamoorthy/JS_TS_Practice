let str = ["hi", "hello", "cat1"]
//["hello"] -- longer than 3 chars

let str_long = str.filter(x => x.length > 3)
console.log(str_long)