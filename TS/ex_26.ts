export { }
const testResults = [
    { name: "Login Test", status: "PASS" },
    { name: "Search Test", status: "FAIL" },
    { name: "Logout Test", status: "PASS" },
    { name: "Payment Test", status: "FAIL" }
];

const getTestSummary = testResults.reduce((test_summary, test) => {
    test_summary["total"]++;
    if (test.status === "PASS") {
        test_summary["passed"]++;
    }
    if (test.status === "FAIL") {
        test_summary["failed"]++;
    }

    return test_summary;
}, { total: 0, passed: 0, failed: 0 });
console.log(getTestSummary);
