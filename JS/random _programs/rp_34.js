
// Find all duplicate test IDs.

// Expected output:

// [102, 103]
// Constraints
// Don't use Set
// Don't use sort()
// Don't use nested for loops

const testIds = [101, 102, 103, 104, 102, 105, 103];

const duplicate_array = testIds.reduce((duplicate, current) => {
    if (!duplicate.narr.includes(current)) {
        duplicate.narr.push(current)
    }
    else if (duplicate.narr.includes(current) && !duplicate.dup.includes(current)) {
        duplicate.dup.push(current);
    }
    return duplicate;
}, { dup: [], narr: [] })
console.log(duplicate_array.dup)