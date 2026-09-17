const words = ["apple", "bat", "ant", "dog"];

let words_start_with_a = words.filter(x => x.toLowerCase().charAt(0) === "a")
console.log(words_start_with_a)