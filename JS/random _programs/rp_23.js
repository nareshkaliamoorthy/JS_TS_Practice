// Use reduce() to find the second-largest unique response time.
const responseTimes = [1, 1, 1];

const second_largest_num = responseTimes.reduce((value, current) => {
    if (current > value.largest) {
        value.second_largest = value.largest;
        value.largest = current;
    }
    else if (current > value.second_largest && current !== value.largest) {
        value.second_largest = current;
    }

    return value;
}, { largest: -Infinity, second_largest: -Infinity });
if (second_largest_num.second_largest === -Infinity) {
    console.log("No secondar number found")
}
console.log("second_largest_value=", second_largest_num.second_largest);
