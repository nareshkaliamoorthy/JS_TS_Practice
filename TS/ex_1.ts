let user: string = "magesh";
// user = 123;//not allowed in typescript

let id: number = 1234;
//id = "";//not allowed in typescript
let count: number = 9.5;
let u_count: number = -9.5;

let isCI: boolean = true;
//let isCheck: boolean = "true";//not allowed in typescript

let result: any = "pass";
result = 123;
result = []; //any data type is allowed on the same variable

let unit: unknown = "hello";
//unit.toLowerCase(); //not allowed since
if (typeof unit === "string") {
    unit.toLowerCase();
}

let username: string | null = "Mani";
username = null; //can be string or null 

let num: number | undefined = 12;
num = undefined; // can be number or undefined type

function print_message(message: string): void {
    console.log(message);
}

let browser: string = "chromium";
let timeout: number = 30000;
let isHeadless: boolean = true;
let testCount: number = 25;
let testsStatus: string = "PASS"

// Q1: It would throw an error saying type Number cannot have string value

