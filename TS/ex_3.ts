export { }
// browsers → ["chrome", "firefox", "edge"]

// responseTimes → [200, 450, 800, 1200]

// testStatuses → ["PASS", "FAIL", "PASS"]

// testIds → [101, 102, 103]

let browsers: string[] = ["chrome", "firefox", "edge"];
let responseTimes: number[] = [200, 450, 800, 1200];
let testStatuses: string[] = ["PASS", "FAIL", "PASS"];
let testIds: number[] = [101, 102, 103];

// Q1: It shows an error that a number can't be infered to a string type variable
// Q2: let values: (string | boolean | number)[]
// Q3: let status: (string | number)[]