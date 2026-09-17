// id       → 101
// test_name     → "Login Test"
// status   → "PASS"
// duration → 350
export { }

let testCase: {
    id: number;
    test_name: string;
    test_status: string;
    duration: number;

} = {
    id: 123,
    test_name: "test valid",
    test_status: "FAIL",
    duration: 90
};
//Q1: It shows an error string cannot be infered to a number type variable
//Q2: it would throw an error property can't be found
//Q3: we need to use the concept of Interface