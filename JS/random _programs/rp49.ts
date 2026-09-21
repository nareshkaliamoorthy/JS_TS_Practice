import { expect } from '@playwright/test';
export const apiResponse = {
    status: 200,
    data: [
        { id: 1, name: "Laptop", price: 75000, stock: 10 },
        { id: 2, name: "Mouse", price: 1500, stock: 0 },
        { id: 3, name: "Keyboard", price: 3500, stock: 5 },
        { id: 4, name: "Monitor", price: 25000, stock: 0 }
    ]
};

// Identifies all products that are out of stock (stock === 0).
// Returns an array containing their names.
// Handles an empty data array.
let outOfStockProducts: string[] = [];
if (apiResponse.data.length > 0) {
    outOfStockProducts = apiResponse.data
        .filter((product) => product.stock === 0)
        .map(product => product.name);
    console.log(outOfStockProducts);
} else {
    console.log("No Data found");
}
expect(outOfStockProducts).toEqual(['Mouse', 'Monitor']);