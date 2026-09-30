const numbers = [10, 20, 30, 40, 30, 50];

const str = ["Somu", "Monu", "Seenu"];

const greater = numbers.find((value) => value > 25);
console.log(greater);

const starts = str.findLast(value => value.startsWith("S"));
console.log(starts);

const findInd = numbers.findIndex(value => value > 25);
console.log(findInd);

const findLastInd = str.findLastIndex(value => value.startsWith("S"));
console.log(findLastInd);


const filterG = numbers.filter((value) => value > 25);
console.log(filterG);

//Nullish Coalescing
const name = "Naresh K";
let nameS;

const user = nameS ?? "Guest!";
console.log(user)