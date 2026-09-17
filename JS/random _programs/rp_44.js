const numbers = [-10, -20, -5, -30];//secondlargest
let second_largest = null;
const sec_lar = numbers.reduce((largest, current) => {
    if (current > largest) {
        second_largest = largest;
        largest = current;

    } else if (current < largest && current > second_largest) {
        second_largest = current;
    }
    return largest;
})

console.log(sec_lar);