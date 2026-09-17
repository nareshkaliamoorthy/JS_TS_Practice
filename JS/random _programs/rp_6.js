// write a JavaScript program to find the browser that occurs most frequently.
// input =["chrome", "firefox", "chrome", "edge", "chrome", "firefox"]
// output - chrome

let browsers = ["chrome", "firefox", "edge", "firefox"];
let browser_count = {};
let count = 0;
for (const browser of browsers) {
    if (!browser_count[browser]) {
        browser_count[browser] = 1;
    }
    else {
        browser_count[browser]++;
    }
}
let max_browser = "";
for (const entry of Object.entries(browser_count)) {
    if (entry[1] > count) {
        count = entry[1];
        max_browser = entry[0];
    }
}
console.log(max_browser)