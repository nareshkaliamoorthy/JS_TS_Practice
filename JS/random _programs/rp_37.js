// output:
// {
//     total: 6,
//     passed: 4,
//     failed: 2,
//     passPercentage: 66.67,
//     failedTests: ["Search", "Profile"],
//     slowTests: ["Payment", "Checkout"],
//     slowestTest: "Payment"
// }

const results = [
    { id: 101, name: "Login", status: "PASS", duration: 250 },
    { id: 102, name: "Search", status: "FAIL", duration: 850 },
    { id: 103, name: "Checkout", status: "PASS", duration: 1200 },
    { id: 104, name: "Profile", status: "FAIL", duration: 650 },
    { id: 105, name: "Logout", status: "PASS", duration: 300 },
    { id: 106, name: "Payment", status: "PASS", duration: 1500 }
];


function getTestSummary(result) {
    const test_summary = result.reduce((summary, test) => {
        summary["total"]++;
        if (test.status === "PASS") {
            summary["passed"]++;
        }
        else if (test.status === "FAIL") {
            summary["failed"]++;
        }
        return summary;
    }, { total: 0, passed: 0, failed: 0 });
    test_summary["passPercentage"] = Number(((test_summary.passed / test_summary.total) * 100).toFixed(2))

    test_summary["failedTests"] = result
        .filter((test_fail) => test_fail.status === "FAIL")
        .map(test_fail => test_fail.name);

    test_summary["slowTests"] = result
        .filter(test_slow => test_slow.duration > 1000)
        .sort((a, b) => b.duration - a.duration)
        .map(test_slow => test_slow.name);

    test_summary["slowestTest"] = (result
        .sort((a, b) => b.duration - a.duration)
        .map(slowest_test => slowest_test.name))[0];

    console.log(test_summary);
}


getTestSummary(results);