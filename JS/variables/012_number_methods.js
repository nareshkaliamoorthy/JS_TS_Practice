// toFixed()
let user_balance = 23245.235
console.log(user_balance.toFixed(2))
//isInteger()
console.log(Number.isInteger(user_balance))
//isFinite
let userid = 23245235n
console.log(Number.isFinite(user_balance))
//isSafeInteger
let long_id = 2324523541541544646464
console.log(Number.isSafeInteger(long_id))
//parseInt
let string_num = "12235"
console.log(typeof (string_num))
string_num = Number.parseInt(string_num)
console.log(typeof (string_num))
//parseFloat
let string_float = "12235.125"
console.log(typeof (string_float))
string_float = Number.parseFloat(string_float)
console.log(typeof (string_float))

let srt = "42 attempts"
srt_num = Number.parseInt(srt)
console.log(srt_num)