//Generics
export { }
//Q1:

function getFirst<T>(items: T[]): T {
    return items[0];
}

console.log(getFirst([100, 200, 200]));
console.log(getFirst(["PASS", "FAIL"]));


//Q2:
interface APIResponse<T> {
    status: number,
    data: T
}
interface User {
    id: number,
    name: string
}

const response: APIResponse<User> = {
    status: 200,
    data: {
        id: 101,
        name: "Magesh"
    }
}

console.log(response.data.name);

//Q3:
//any -> accepts any input and give any output - no control over it and there is no type safety
//Generics -> creates resuable code with different type while maintaining type safety. it accepts same type for both input and output.

//Q4: I would use generic here because that would avoid code duplication. Generics will help to create reusable code with diff types.


