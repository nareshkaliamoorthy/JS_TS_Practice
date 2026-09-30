const apiResponse = {
    username: "Naresh",
    role: "QA Automation Engineer",
    status: "active"
};

// Extracts the role value.
// Reverses the string.
// Returns the reversed string.
let reversedRole = "";
const roleValue = apiResponse.role ?? null;
if (roleValue) {
    reversedRole = roleValue.split("").reverse().join("")
    console.log(reversedRole);
} else {
    console.log("No Role found");
}

