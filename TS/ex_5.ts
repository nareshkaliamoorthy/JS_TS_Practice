// Create an Interface
// User
//  ├── id       → number
//  ├── name     → string
//  ├── role     → string
//  └── active   → boolean

//Q1: 
interface User {
    id: number;
    username: string;
    role: string;
    active: boolean;
}

//Q2:
let users: User[] = [
    {
        id: 101,
        username: "Naresh",
        role: "QA",
        active: true

    },
    {
        id: 102,
        username: "Arun",
        role: "Developer",
        active: false
    },
    {
        id: 103,
        username: "Priya",
        role: "Manager",
        active: true
    }
];

//Q3:
function getActiveUsers(users: User[]): User[] {
    let active_users = users
        .filter(user => user.active);
    return active_users;

}

console.log(getActiveUsers(users));