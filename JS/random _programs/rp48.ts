export const apiResponse = {
    products: [
        { id: 1, name: "Laptop", price: 75000 },
        { id: 2, name: "Mouse", price: 1500 },
        { id: 3, name: "Keyboard", price: 3500 },
        { id: 4, name: "Monitor", price: 25000 }
    ]
};

// Finds the product with the highest price.
// Returns the complete product object.
// Handles an empty products array.

if (apiResponse.products.length > 0) {
    const OrderedProducts = [...apiResponse.products].sort((a, b) => b.price - a.price)[0];
    console.log(OrderedProducts);
}
else {
    console.log("No Products Exist");
}