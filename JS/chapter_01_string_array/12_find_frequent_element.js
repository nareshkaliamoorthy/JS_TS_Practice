let arr = [1, 2, 2, 2, 2, 3, 3, 3, , 3, 3, 4, 4, 4]
//output = 3
map_arr = {}
max_count = 0
for (x of arr) {
    map_arr[x] = (map_arr[x] || 0) + 1
    if (map_arr[x] > max_count) {
        max_count = map_arr[x]
        freq_ele = x
    }

}
console.log(freq_ele)
