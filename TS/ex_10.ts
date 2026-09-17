export { }
//Literal Types
//Q1:
type Browser = "chrome" | "firefox" | "edge";

let browser: Browser = "chrome";

//Q2:
type HTTPStatus = 200 | 201 | 400 | 401 | 404 | 500
let status: HTTPStatus = 200;
//it would have compile time error if we assign the value as 503 because that was not defined in HTTPStatus type.


//Q3: Option B because type would allow the user to choose only the values defined inside the TestStatus type. it gives more control and prevents any kind of invalid statuses being entered during development.