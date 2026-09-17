let user = "Somasundaram ";
console.log(user.length);
// console.log("CHARAT:", user.charAt(4));
// console.log("AT:", user.at(-12))
// console.log("CHARCODEAT:", user.charCodeAt(2))
// console.log("CODEPOINTAT:", user.codePointAt(2))
// console.log("CONCAT:", user.concat(", Chennai"))
// console.log("INCLUDES:", user.includes("sundaram"))

console.log(user.includes("aram"))
user = user.trim()
console.log(user)
console.log(user.length);
console.log(user.startsWith("U"))
console.log(user.toLowerCase());
console.log(user.split(" "));
console.log(user.replace("aram", "aram"));
console.log(user.slice(0, 4));

// includes
// trim
// startsWith
// replace
// slice
// split
// toLowerCase
// uppercase

const browsers = "chrome,firefox,webkit"
const arr_list = browsers.split(",")
console.log(arr_list)


