let num = [1, 2, 3, 4, 5, 6, 13, 15, 16]
let prime_num = num.filter(x => {
    if (x < 2) {
        return false
    }
    for (i = 2; i <= x - 1; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true

})
console.log(prime_num)