enum TestStatus {
    PASS = "pass",
    FAIL = "fail",
    SKIPPED = "skipped"
};

function printStatus(status: TestStatus) {
    if (status === TestStatus.PASS) {
        console.log("Test passed");
    } else if (status === TestStatus.FAIL) {
        console.log("Test failed");
    } else if (status === TestStatus.SKIPPED) {
        console.log("Test skipped");
    }
}
printStatus(TestStatus.SKIPPED);