export { }
interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

const getTestName = (test: TestCase): string => {
    return test.name;

}

const test1: TestCase = {
    id: 144,
    name: "test Login",
    status: "pass",
    duration: 8789
};
console.log(getTestName(test1));