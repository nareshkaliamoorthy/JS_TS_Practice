export { }
const testResults = [
    { name: "Login Test", status: "PASS" },
    { name: "Search Test", status: "FAIL" },
    { name: "Logout Test", status: "PASS" },
    { name: "Payment Test", status: "FAIL" }
];

const getTestNames = testResults.map(test => test.name)
console.log(getTestNames);