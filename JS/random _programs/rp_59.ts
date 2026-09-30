const non_dup_num = [10, 20, 10, 30, 10, 20, 40, 30];

//Remove duplicate elements from an array without using Set; preserve original order
const dup_num: number[] = []

for (const num of non_dup_num) {
    if (!dup_num.includes(num)) {
        dup_num.push(num);
    }
}
// const dup_ele: Record<number, number> = non_dup_num.reduce((acc, num) => {
//     acc[num] = (acc[num] || 0) + 1;
//     return acc;
// }, {} as Record<number, number>);
// console.log(dup_ele)
// for (const key in dup_ele) {
//     if (dup_ele[key] > 0) {
//         dup_num.push(Number(key));
//     }
// }
console.log(dup_num)
