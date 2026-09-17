//Custom Type Guard
// Check that data is an object.
// Check that it isn't null.
// Check that it has id.
// Check that it has name.
// Return true if all checks pass.
export { }
interface User {
    id: number;
    name: string;
}
const data: unknown = {
    id: 101,
    name: 'Naresh'
};

function isUser(data: unknown): data is User {
    if (typeof data === "object") {
        if (data !== null) {
            if ("id" in data && "name" in data) {
                return true
            }

        }
    }
    return false
}

if (isUser(data)) {
    console.log(data.name)
}