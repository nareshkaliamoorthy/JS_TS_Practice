// Use reduce() to calculate the total price.
const orders = [
    { product: "Laptop", price: 50000 },
    { product: "Mouse", price: 1500 },
    { product: "Keyboard", price: 3000 }
];

const total_price = orders.reduce((sum, value) => sum + value.price, 0);
console.log(total_price)