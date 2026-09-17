//1. length
let userName_1 = "Magesh";
console.log(userName_1.length);

//2. toUpperCase()
let userName_2 = "Solo-PerformanceDance";
console.log(userName_2.toUpperCase());

//3. toLowerCase()
let userName_3 = "Solo-PerformanceDance";
console.log(userName_3.toLowerCase());

//4. split()
let userName_4 = "Solo-PerformanceDance";
console.log(userName_4.split(""));

//5. slice()
let userName_5 = "Solo-PerformanceDance";
console.log(userName_5.slice(3, 10)); //o-Perfo
console.log(userName_5.slice(-12, -2)); //o-Perfo

//6. trim()
let userName_6 = " Solo-PerformanceDance                ";
console.log(userName_6);
console.log(userName_6.trim());

//7. includes()
let userName_7 = "Solo-PerformanceDance";
console.log(userName_7.includes("man"));
console.log(userName_7.includes("main"));

//8. concat()
let userName_8 = "Solo-PerformanceDance";
console.log(userName_8.concat(" Masti"));

//9. startsWith()
let userName_9 = "Solo-PerformanceDance";
console.log("9_1:", userName_9.startsWith("Solo"));
console.log("9_2:", userName_9.startsWith("solo"));

//10. endsWith()
let userName_10 = "Solo-PerformanceDance";
console.log("10_1:", userName_10.endsWith("nce"));
console.log("10_2:", userName_10.endsWith("Nce"));

//11. replace()
let userName_11 = "Solo-PerformanceDance";
console.log("11:", userName_11.replace("Dance", "Masti"));

//12. replaceAll()
let userName_12 = "Solo-PerformanceDance";
console.log("12:", userName_12.replaceAll("an", "aann"));

//13. substring()
let userName_13 = "Solo-PerformanceDance";
console.log("13:", userName_13.substring(3, 12));
//console.log("13:", userName_13.substring(-12, -2)); // DOES NOT ACCEPT NEGATIVE INDEX

//14. charAt()
let userName_14 = "Solo-PerformanceDance";
console.log("14_1:", userName_14.charAt(4));
//console.log("14_2:", userName_14.charAt(-4));// DOES NOT ACCEPT NEGATIVE INDEX

//15. indexOf()
let userName_15 = "Solo-PerformanceDanceman";
console.log("15_1:", userName_15.indexOf("man"));
console.log("15_2:", userName_15.indexOf("maan"));

//16. lastIndexOf()
let userName_16 = "Solo-PerformanceDanceman";
console.log("16_1:", userName_16.lastIndexOf("man"));
console.log("16_2:", userName_16.lastIndexOf("maan"));

//17. repeat()
let userName_17 = "-";
console.log("17_1:", userName_17.repeat(75));


