// output:
// {
//     total: 6,
//     passed: 4,
//     failed: 2,
//     passPercentage: 66.67,
//     failedTests: ["Search", "Profile"],
//     slowestTest: {
//         name: "Payment",
//         duration: 1200
//     }
// }

const results = [
    { testId: 101, name: "Login", status: "PASS", duration: 120 },
    { testId: 102, name: "Search", status: "FAIL", duration: 450 },
    { testId: 103, name: "Checkout", status: "PASS", duration: 800 },
    { testId: 104, name: "Logout", status: "PASS", duration: 150 },
    { testId: 105, name: "Profile", status: "FAIL", duration: 1201 },
    { testId: 106, name: "Payment", status: "PASS", duration: 1200 }
];

const test_summary = results.reduce((summary, result) => {

    summary["total"]++;

    if (result.status === "PASS") {
        summary["passed"]++;
    }
    if (result.status === "FAIL") {
        summary["failed"]++;
        summary["failedTests"].push(result.name);
    }

    if (result.duration > summary["slowestTest"].duration) {
        summary["slowestTest"].duration = result.duration;
        summary["slowestTest"].name = result.name;
    }
    return summary;

}, { total: 0, passed: 0, failed: 0, pass_percentage: 0, failedTests: [], slowestTest: { name: null, duration: 0 } });

test_summary["pass_percentage"] = Number(((test_summary["passed"] / test_summary["total"]) * 100).toFixed(2));

console.log(test_summary);
