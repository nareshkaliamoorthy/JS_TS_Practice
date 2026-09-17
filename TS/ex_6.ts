// TestResult
//  ├── id        → number
//  ├── name      → string
//  ├── status    → string
//  ├── duration  → number
//  └── errorMessage → optional string
export { }
//Q1:
interface TestResult {
    id: number;
    name: string;
    status: string;
    duration: number;
    errorMessage?: string;
}
//Q2:
let test_result: TestResult[] = [
    {
        id: 101,
        name: "Login",
        status: "PASS",
        duration: 250
    },
    {
        id: 102,
        name: "Checkout",
        status: "FAIL",
        duration: 850,
        errorMessage: "Payment gateway timeout"
    }
];

//Q3:
//This object is not valid because the errorMessage cannot be infered to number type since its a string type variable