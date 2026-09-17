//ENUM

enum TestStatus {
    PASS = "PASS",
    FAIL = "FAIL",
    SKIP = "SKIP",
    UNKNOWN = "UNKNOWN"
}

const test: TestStatus = TestStatus.PASS;
console.log(test);