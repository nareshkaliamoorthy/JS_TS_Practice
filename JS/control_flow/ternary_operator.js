// (condition ? valueIfTrue : valueIfFalse) 
isCI = true;
const timeout = isCI ? 30000 : 20000
console.log(timeout)
const retries = isCI ? 3 : 0
console.log(retries)
