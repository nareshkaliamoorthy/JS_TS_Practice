let obj = [1, 2, 2, 3, 3, 3] //output => {1:1,2:2,3:3}

let freq = obj.reduce((acc, curr_value) => {
    acc[curr_value] = (acc[curr_value] || 0) + 1
    return acc
}, {})

console.log(typeof [...freq].keys()[0])

