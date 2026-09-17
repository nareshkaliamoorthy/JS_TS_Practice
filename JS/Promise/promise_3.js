async function getData() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Data received");
        }, 2000);

    });

}
let result = await getData();
console.log(result);


// result.then(value => {
//     console.log(value);
// })