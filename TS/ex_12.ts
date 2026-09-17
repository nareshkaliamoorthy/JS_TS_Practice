function getValue(value: string | number) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value * 2;
    }

}
console.log(getValue(300));

//Q2:
interface SUCCESS {
    status: "PASS";
    duration: number;
}
interface FAILURE {
    status: "FAIL";
    errorMessage: string;
}
type TestResult = SUCCESS | FAILURE;

function getResultMessage(result: TestResult): string {
    if (result.status === "PASS") {
        return `Test Completed in ${result.duration}ms`;
    }
    else {
        return `Test failed: ${result.errorMessage}`;
    }
}

//Q3: In case of interface, we could access the wrong properties accidentally. In case of Union combination, we could clearly define the structure and use the right one by narrowing the type or property check.