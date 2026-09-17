function greet(name, callback) {
    console.log(`Hello ${name}!`);
    callback();
}

greet("Naresh K", () => {
    console.log("Welcome to callback function");

});