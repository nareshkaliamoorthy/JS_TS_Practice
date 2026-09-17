const isStaging1 = true
const isTestDataExist1 = true
const allowTest1 = isStaging1 && isTestDataExist1
console.log(allowTest1) //true

const isStaging2 = false
const isTestDataExist2 = true
const allowTest2 = isStaging2 && isTestDataExist2
console.log(allowTest2) //false

const isStaging3 = 5
const isTestDataExist3 = 0
const allowTest3 = isStaging3 && isTestDataExist3
console.log(allowTest3) //0

//NOTE: 0 IS FALSY AND ANY NUMBER OTHER THAN 0 IS TRUTHY

const isStaging4 = 1
const isTestDataExist4 = -1
const allowTest4 = isStaging4 && isTestDataExist4
console.log(allowTest4) //-1