let word = ["apple", "bat", "ant"]
//output = ["apple","ant"]
let word_startwith_a = word.filter(x => x.indexOf("a") === 0)

console.log(word_startwith_a)