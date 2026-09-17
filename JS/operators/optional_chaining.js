let location = { city: "chennai", states: { st1: "Tamil Nadu", st2: "Kerala" } };


let address1 = location.state?.st1 // undefined

console.log(address1)

let address2 = location.pincode.state?.city // will throw an error
console.log(address2)