//any or unknown

//Q1: No Errors, it will allow to use any function here because we are using any data type. it doesnt expect narrow type check

//Q2: Show error, because of the data type is unknown which expects to do type check before using the variable. Typescript doesn't know the type yet until we do typecheck

//Q3:
let value: unknown = "PASS";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}

//Q4:
//1) We can't blindly use status before we know it exist
//2) We can use unknown data type here which will require us to first do a property check before we use that
//3) Along with unknown, we also need to narrow down the existence of the property before using it.