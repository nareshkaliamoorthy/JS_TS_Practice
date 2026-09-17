//string array
let browsers: string[] = ['chromium', 'firefox', 'webkit'];
let usernames: Array<string> = ['magesh', 'naresh']
console.log(browsers)
console.log(usernames)

//number array
let ids: number[] = [1, 4, 7, 8];
let test_ids: Array<number> = [9, 45, 32];
console.log(test_ids);

//boolean array
let test_status: boolean[] = [true, false, true];
console.log(test_status.length);

//multiple array types
let values: (boolean | number)[] = [true, 1, false, 2, 434];
let test_name: (string | number)[] = ["true", "valid login", 1];
let test_result: (boolean | string)[] = [true, "PASS"];

