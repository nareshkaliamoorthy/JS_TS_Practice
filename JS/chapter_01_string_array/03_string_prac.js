const text = "  JavaScriipt Interview  ";
//Remove spaces
const text_1 = text.replaceAll(" ", "")
console.log(text_1)
const text_2 = text.trim()
console.log(text_2)

/*Convert to uppercase*/
const text_upper = text.toUpperCase()
console.log(text_upper)

//Count total words
console.log(text.length)
text_split = text.trim().split(" ")
console.log(text_split.length)

//Check if "Script" exists
console.log(text.includes("Script"))

//substring
let sub_str = "javascript"
console.log(sub_str.substring(-3))