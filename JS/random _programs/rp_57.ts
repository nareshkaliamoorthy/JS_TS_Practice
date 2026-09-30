const num = [10, 20, 30, 10, 20, 40, 10, 50, 30];

//find duplicate numbers

// Output:
// [20, 10, 30]
let duplicate_num: number[] = [];
const obj_num: Record<string, number> = num.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    if (acc[value] > 1 && !duplicate_num.includes(value)) {
        duplicate_num.push(value);
    }
    return acc;
}, {} as Record<string, number>)

// for (const key in obj_num) {
//     if (obj_num[key] > 1) {
//         duplicate_num.push(Number(key));
//     }
// }
console.log(duplicate_num);