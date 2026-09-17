let age = [{ age: 15 }, { age: 20 }]
//output = [{age:20}]

let filtered_age = age.filter(x => x.age > 18)
console.log(filtered_age)