const dup = [1, 2, 2, 3, 4, 4]
let new_dup = dup.filter((x, y) =>
    dup.indexOf(x) === y
)
console.log(new_dup)
