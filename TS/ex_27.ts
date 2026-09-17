export { }
enum TestStatus {
    PASS = "pass",
    FAIL = "fail",
    SKIPPED = "skip"
}

interface TestResult {
    id: number,
    name: string,
    status: TestStatus
}

const test_result_1: TestResult = {
    id: 121,
    name: "Login",
    status: TestStatus.PASS
}
const test_result_2: TestResult = {
    id: 122,
    name: "Login Fail",
    status: TestStatus.FAIL
}
const test_result_3: TestResult = {
    id: 123,
    name: "Login Skip",
    status: TestStatus.SKIPPED
}

console.log(test_result_3);