
let order_2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Completed");

    }, 3000);
})
order_2.then(result => {
    console.log(result)
})