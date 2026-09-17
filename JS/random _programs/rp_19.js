// Using only reduce(), produce:
// {
//     PASS: 3,
//     FAIL: 2
// }

const results = [
    { test: "Login", status: "PASS" },
    { test: "Search", status: "FAIL" },
    { test: "Logout", status: "PASS" },
    { test: "Checkout", status: "FAIL" },
    { test: "Profile", status: "PASS" }
];

const test_results = results.reduce((count, stats) => {
    if (stats.status === "PASS") {
        count.PASS++;
    }
    else if (stats.status === "FAIL") {
        count.FAIL++;
    }
    return count;
}, { PASS: 0, FAIL: 0 });
console.log(test_results);