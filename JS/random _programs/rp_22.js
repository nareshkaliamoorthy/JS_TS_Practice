// use reduce();
// {
//     totalTests: 5,
//     passedTests: 3,
//     failedTests: 2,
//     totalExecutionTime: 2400
// }
const tests = [
    { name: "Login", status: "PASS", time: 200 },
    { name: "Search", status: "FAIL", time: 500 },
    { name: "Checkout", status: "PASS", time: 800 },
    { name: "Logout", status: "PASS", time: 300 },
    { name: "Profile", status: "FAIL", time: 600 }
];
const test_results = tests.reduce((results, data) => {
    if (data.status === "PASS") {
        results.passedTests++;
        results.totalTests++;
        results.totalExecutionTime = results.totalExecutionTime + data.time
    }
    if (data.status === "FAIL") {
        results.failedTests++;
        results.totalTests++;
        results.totalExecutionTime = results.totalExecutionTime + data.time
    }

    return results;
}, { totalTests: 0, passedTests: 0, failedTests: 0, totalExecutionTime: 0 });

console.log(test_results)