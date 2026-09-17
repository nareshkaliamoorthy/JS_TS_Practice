//1. push()
let username_1 = ['magesh', 'suresh', 'naresh'];
username_1.push('dinesh', 'akil');
console.log(username_1);

//2. pop()
let username_2 = ['magesh', 'suresh', 'naresh'];
username_2.pop();
console.log(username_2);

//3. shift()
let username_3 = ['magesh', 'suresh', 'naresh'];
username_3.shift();
console.log(username_3);

//4. unshift()
let username_4 = ['magesh', 'suresh', 'naresh'];
username_4.unshift("Diwakar");
console.log(username_4);

//5. length
let username_5 = ['magesh', 'suresh', 'naresh'];
console.log(username_5.length);

//6. includes()
let username_6 = ['magesh', 'suresh', 'naresh'];
console.log("6_1:", username_6.includes("naresh"));//true - match found
console.log("6_2:", username_6.includes("nares")); //false - partial string 
console.log("6_3:", username_6.includes("Murali"));//false - no match found

//7. indexOf()
let username_7 = ['magesh', 'suresh', 'naresh'];
console.log("7_1:", username_7.indexOf("naresh"));
console.log("7_2:", username_7.indexOf("nares"));

//8. join()
let username_8 = ['magesh', 'suresh', 'naresh'];
console.log(username_8.join(","));

//9. map()
let username_9 = ['magesh', 'suresh', 'naresh'];
let user_9 = username_9.map((name) => name.toUpperCase());
console.log(user_9);

//10. filter()
let username_10 = ['magesh1', 'suresh1', 'naresh'];
let filtered_name = username_10.filter(name => name.length > 6);
console.log(filtered_name);

//11. find()
let username_11 = ['magesh1', 'mgesh1', 'suresh1', 'naresh', "Magesh1"];
console.log("11:", username_11.find(name => name.startsWith("m")));

//12. findIndex()
let username_12 = ['amagesh1', 'mgesh1', 'suresh1', 'naresh', "Magesh1"];
console.log(username_12.findIndex(name => name.startsWith("m")));

//13. foreach()
let username_13 = ['amagesh1', 'mgesh1', 'suresh1', 'naresh', "Magesh1"];
username_13.forEach(user_13 => console.log(user_13.toUpperCase()));

//14. every()
let username_14 = ['amagesh1', 'mgesh1', 'suresh1', 'naresh', "Magesh1"];
console.log(username_14.every(name => name.includes("esh")));

//15. some()
let username_15 = ['amagesh1', 'mgesh1', 'suresh1', 'naresh', "Magesh1"];
console.log(username_15.some(name => name.startsWith("mgesh1")));

//16. sort()
let num_16 = [21, 10, 2, 11, 54, 74, 44];
console.log(num_16.sort());
num_16.sort((a, b) => a - b);
console.log(num_16);