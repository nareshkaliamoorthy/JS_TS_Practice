export const apiResponse = {
    status: "success",
    data: [
        { id: 1, name: "John", active: false },
        { id: 2, name: "David", active: false },
        { id: 3, name: "Mike", active: true }
    ]
};

// Extracts all active users (active: true).
// Returns an array containing only their names.
// Ensures the result is dynamically generated.

const activeUsers = apiResponse.data
    .filter((user) => user.active)
    .map((user) => user.name);

console.log(activeUsers);