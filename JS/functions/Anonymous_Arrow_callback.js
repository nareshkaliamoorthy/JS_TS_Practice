//Anonymous Callback regular function
function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

greet("Naresh K", function () {
    console.log("Anonymous Function");
});


//Anonymous Arrow Callback function without parameter
function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

greet("Naresh K", () => {
    console.log("Anonymous Arrow Function");
})