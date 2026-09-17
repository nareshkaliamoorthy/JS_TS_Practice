let users = [{ active: true }, { active: false }]

let active_users = users.filter(x => x.active === true)
console.log(active_users)