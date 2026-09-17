export { }
const testResults = [
    { name: "Login Test", status: "PASS" },
    { name: "Search Test", status: "FAIL" },
    { name: "Logout Test", status: "PASS" },
    { name: "Payment Test", status: "FAIL" }
];

const getTestPassed = testResults.filter(test => test.status === "PASS")
console.log(getTestPassed)
