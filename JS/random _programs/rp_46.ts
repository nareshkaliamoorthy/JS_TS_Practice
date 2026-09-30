const userIds: number[] = [101, 102, 103, 102, 104, 101, 102, 105];

// Identifies duplicate user IDs.
// Returns an array containing only the duplicate values.
// Ensures each duplicate appears only once in the result.


// const dup = [...new Set(userIds.filter((id, index) => userIds.indexOf(id) !== index))];
// console.log(dup);

const dup: number[] = userIds.reduce<number[]>((acc, id, index, arr) => {
    if (arr.indexOf(id) !== index && !acc.includes(id)) {
        acc.push(id);
    }
    return acc;
}, [])
console.log(dup);