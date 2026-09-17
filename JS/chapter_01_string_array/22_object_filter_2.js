let user_name = [{ name: "Naresh" }, { name: "Raj" }]

let name_start = user_name.filter(x => x.name.toLowerCase().indexOf("n") === 0)

console.log(name_start)
