export { }
interface TestResult {

    id: number;

    name: string;

    result: string

}

const test_result: TestResult = {

    id: 101,

    name: "Login",

    result: "PASS"
};

const test_result_1: TestResult = {

    id: "101", //  XX This is not allowed because  id is defined as number in its structure above

    name: "Login",

    result: "PASS"
};


