//Anonymous arrow callback  with parameter
function greet(name, callback) {
    callback(name);
}

greet("Naresh K", (name) => {
    console.log(`Hello ${name}`);
})