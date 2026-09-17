// Using only reduce(), count how many responses belong to each status code.
// {
//     200: 3,
//     404: 2,
//     500: 1
// }
const apiResults = [
    { endpoint: "/login", status: 200 },
    { endpoint: "/users", status: 404 },
    { endpoint: "/products", status: 200 },
    { endpoint: "/orders", status: 500 },
    { endpoint: "/search", status: 200 },
    { endpoint: "/profile", status: 404 }
];

const status_codes = apiResults.reduce((count_obj, status_code) => {
    if (status_code.status === 200) {
        count_obj["200"]++;
    }
    else if (status_code.status === 404) {
        count_obj["404"]++;
    }
    else if (status_code.status === 500) {
        count_obj["500"]++;
    }
    return count_obj;
}, { 200: 0, 404: 0, 500: 0 });

console.log(status_codes);
