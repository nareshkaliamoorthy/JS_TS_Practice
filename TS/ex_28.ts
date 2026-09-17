export { }
type TestId = number | string;

const processTestId = (test: TestId) => {
    if (typeof (test) === "string") {
        console.log(test.toUpperCase());
    }
    else if (typeof (test) === "number") {
        console.log(test * 10);
    }
}

processTestId(12);