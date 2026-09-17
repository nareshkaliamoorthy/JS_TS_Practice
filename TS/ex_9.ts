//Type or Type aliases
export { }
//Q1:
type TestStatus = "PASS" | "FAIL" | "SKIP";

let status: TestStatus = "PASS";

//Q2: Compile time error because ERROR is not part of the structure. TestStatus type is defined to have only PASS or FAIL or SKIP

//Q3:
type TestResult = {
    id: number;
    name: string;
    status: "PASS" | "FAIL" | "SKIP";
    duration: number;

};
let test_result: TestResult = {
    id: 101,
    name: "test",
    status: "FAIL",
    duration: 109
};

//Q4:
// interface can create structure/shape of an object
// type can create a type for an object. it can create type for unions. it can control the values by giving the list of values that user can choose, while creating the type. Type can be created for arrays and functions