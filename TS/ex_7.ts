//Union Types
//Q1:
export { }
let testData: string | number;
testData = "PASS";
testData = 200;

//Q2:
interface TestResult {
    id: number;
    name: string;
    result: string | number;
}

let test_result: TestResult[] = [{
    id: 101,
    name: "Login",
    result: "PASS"
},
{
    id: 102,
    name: "API Status",
    result: 200
}
]

    //Q3:
    It will throw an error in both cases because Typescript doesn't know whether it is a string or a number. So, we must narrow the type first before calling any function. Narrowing the type can be done by "typeof"