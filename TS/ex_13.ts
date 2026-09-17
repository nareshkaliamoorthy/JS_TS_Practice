export { }

interface TestResult {
    readonly id: number;
    name: string;
    status: "PASS" | "FAIL";
    duration: number;
}

const testResult: TestResult = {
    id: 101,
    name: "Login",
    status: "PASS",
    duration: 250
};

//Q1: we cannot change the value of testresult.id here because it is declared as readonly
//Q2: it gets changed
//Q3: const variable cannot be reassigned
//Q4: I would make the testId and executionEnvironment as readonly because once they are set, their shouldn't be altered