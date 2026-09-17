//TYPE ALIAS
// A type alias is used to create a reusable name for a type. Unlike interface which is mainly used to create a structure of an  object,
// type represents objects, unions, literal types, functions, arrays and more

export { }

//object
type TestResult_object = {
    id: number;
    name: string;
    result: string;
};
//union Type
type TestResult_union = string | number;

//literal type
type TestResult_literal = "PASS" | "FAIL" | "SKIP";

//arrays
type TestResult_array1 = string[];
type TestResult_array2 = number[];

//functions
type calculator = (a: number, b: number) => number;
const add: calculator = (a, b) => {
    return a + b;
}
console.log(add(9, 5));