//Type Guards - custom type guard
// Requirements:

// If the response has a data property → print the data.
// Otherwise → print the error message.
// Use the in operator for narrowing.
// Hint
export { }
interface successResponse {
    status: number;
    data: string[];
}
interface errorResponse {
    status: number;
    message: string;
}

const response: successResponse | errorResponse = {
    status: 200,
    data: ['Login', 'Checkout']
};
function processResponse(response: successResponse | errorResponse) {

    if ("data" in response) {
        console.log(response.data);
    } else {
        console.log(response.message);
    }
}
processResponse(response);