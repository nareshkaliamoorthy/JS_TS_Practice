const { resolve } = require("node:dns");

let order = new Promise((resolve, reject) => {
    resolve("Pizza Delivered");
})
order.then((result) => {
    console.log(result);
})
console.log(order);

let order1 = new Promise((resolve, reject) => {
    reject("Failed");
});
console.log(order1);
