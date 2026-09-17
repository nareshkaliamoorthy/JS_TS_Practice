const browsers = ["chrome", "firefox", "webkit"];
for (const browswer of browsers) {
    console.log(browswer);
}

const users = [
    { email: "user1@test.com", role: "admin" },
    { email: "user2@test.com", role: "user" }
];

for (user of users) {
    console.log(user.email, user.role)
}