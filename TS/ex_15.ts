//ENUM
export { }
//Q1:
enum Browser {
    CHROME = "chrome",
    FIREFOX = "firefox",
    EDGE = "edge"
}

let browser: Browser = Browser.CHROME;

//Q2:
browser = Browser.FIREFOX; //--the value of browser is assigned to firefox
browser = "firefox"; // - It will show an error that string value cannot be assigned for Browser type variable

//Q3:
enum TestStatus {
    PASS = "pass",
    FAIL = "fail",
    SKIP = "skip"
}

function printStatus(status: TestStatus): void {
    if (status === TestStatus.PASS) {
        console.log("Test Passed");
    }
    else if (status === TestStatus.FAIL) {
        console.log("Test Failed");
    }
    else {
        console.log("Test Skipped");
    }
}
printStatus(TestStatus.PASS);

//Q4: depending on the requirement we can use either of them. I would go with Type when i want to have compile time restrictions to the set of values. I would consider ENUM when i want to have named members and runtime object representing those values.