const num = [1, -1, -3, 3, 5, 8, 55, 100]
//num.sort((a, b) => a - b)
const new_num = []
for (let i = Math.min(...num); i < Math.max(...num); i++) {
    if (!num.includes(i)) {
        new_num.push(i)
    }

}
console.log(new_num)