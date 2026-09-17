const user = { username: "naresh", role: "admin" }

console.log(user.username)
console.log(user.role)

const testcase = { testname: "validate add function", priority: "p0" }
console.log(testcase.testname)
console.log(testcase.priority)


const creds = {
    username: "kannan@xxx.com",
    password: "123abc"

}

console.log(creds.username)

const creds2 = creds

creds2.password = "789"
console.log(creds.password)


//safely copy an object
let user_info_1 = { role: "admin" }
let user_info_2 = { ...user_info_1 }
user_info_2.role = "HR"
console.log(user_info_1)
console.log(user_info_2)