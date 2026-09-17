// Create an interface called TestCase with these properties:

// id       → number
// name     → string
// status   → string
// duration → number

// Then create two test-case objects using this interface and print their details.

interface TestCase {
    id: number,
    name: string,
    status: string,
    duration: number
}

const test1: TestCase = {
    id: 125,
    name: "Login",
    status: "In Progress",
    duration: 120
};

const test2: TestCase = {
    id: 126,
    name: "Login",
    status: "In Progress",
    duration: 120
};

