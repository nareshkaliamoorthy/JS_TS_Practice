// Write a program that:

// Verifies the API status is 200.
// Finds available products.
// From those, keeps products with price greater than ₹3,000.
// Sorts them from highest price → lowest price.
// Prints only the product names, one per line.
// Expected output
// API Status: Passed
// Products:
// Laptop
// Monitor
// Requirements

// Use:

// filter()
// sort()
// map()
// forEach()

// Don't use a for loop



const response = {
    status: 200,
    data: {
        products: [
            { id: 101, name: "Laptop", price: 15000, available: true },
            { id: 102, name: "Mouse", price: 1200, available: false },
            { id: 103, name: "Keyboard", price: 2500, available: true },
            { id: 104, name: "Monitor", price: 18000, available: true },
            { id: 105, name: "Webcam", price: 3500, available: false }
        ]
    }
};

if (response.status === 200) {
    console.log("API Status: Passed")
    const products_data = response.data.products
        .filter(product => product.available && product.price > 3000)
        .sort((a, b) => b.price - a.price)
        .map(prod => prod.name);
    console.log("Products:")
    products_data.forEach((name) => { console.log(name) });
    //console.log(products_data)
}
