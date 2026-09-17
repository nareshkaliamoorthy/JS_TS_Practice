//Type Guards
// If response is a string, convert it to uppercase and print it.
// If response is a number, multiply it by 2 and print it.
const response: unknown = 200;

function processResponse(response: unknown) {
    if (typeof response === "string") {
        console.log(response.toUpperCase());
    }
    else if (typeof response === "number") {
        console.log(response * 2);
    }

}
processResponse(response);