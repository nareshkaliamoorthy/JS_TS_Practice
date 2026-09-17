const numbers = [1, 2, 2, 3, 4, 4, 3, 5, 1];//remove duplicates

const num_arr = [];

for (let i = 0; i < numbers.length; i++) {
    if (!num_arr.includes(numbers[i])) {
        num_arr.push(numbers[i])
    }
}
console.log(num_arr)

const new_arr = [...new Set(numbers)];
console.log(new_arr);