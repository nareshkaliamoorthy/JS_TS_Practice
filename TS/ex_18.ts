//Optional Properties & Optional Parameters

interface TestConfig {
    browser: string;
    timeout: number;
    headless?: boolean;
}
// Which of these are valid?
// const config = {
//     browser: "chrome",
//     timeout: 30000
// };
// const config = {
//     browser: "chrome",
//     timeout: 30000,
//     headless: true
// };
// const config = {
//     browser: "chrome"
// };

// answer:
// Is config of type TestConfig? If yes, A & B are valid A - has both browser and timeout which are mandatory and headless is missing which is valid B - has all 3, browser, timeout and headless which includes 2 mandatory and headless optional property - which is valid C- didn't include timeout and so its invalid