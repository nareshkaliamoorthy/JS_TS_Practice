export { }

function getFirstItem<T>(items: T[]): T {
    return items[0];
}

console.log(getFirstItem([0, 1, 2, 5]));

let a = 10;
let b = a;
b = 20;
console.log("B:", b)
console.log("A:", a)

sayHello();

function sayHello() {
    console.log("Hello");
}