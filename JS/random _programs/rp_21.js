// use reduce();
// expected output:
//     {
//     200: ["/login", "/products", "/search"],
//     404: ["/users", "/profile"],
//     500: ["/orders", "/checkout"]
// }
const apiResults = [
    { endpoint: "/login", status: 200 },
    { endpoint: "/users", status: 404 },
    { endpoint: "/products", status: 200 },
    { endpoint: "/orders", status: 500 },
    { endpoint: "/search", status: 200 },
    { endpoint: "/profile", status: 404 },
    { endpoint: "/checkout", status: 500 }
];

const endpoint_grp = apiResults.reduce((code_endpoint, status_code) => {
    code_endpoint[status_code.status].push(status_code.endpoint);
    return code_endpoint;
}, { 200: [], 404: [], 500: [] });
console.log(endpoint_grp);

