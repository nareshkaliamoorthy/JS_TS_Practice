export { }
type TestStatus = "PASS" | "FAIL" | "SKIPPED";

let status: TestStatus = "PASS";
console.log(status);
status = "ERROR";
status = "SKIPPED"