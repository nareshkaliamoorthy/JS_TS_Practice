const arr = [10, 20, 30, 40, 50];
/*Return only numbers greater than 25*/

const new_arr = arr.filter(x => x > 25)
console.log(new_arr)

/*Double each value*/
const map_arr = arr.map(x => x * 2)
console.log(map_arr)

/*Find total sum*/
const tot_sum = arr.reduce((x, y) => x + y)
console.log(tot_sum)

