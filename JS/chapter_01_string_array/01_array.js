let list = [1, 3, 6, 4, 7]
//removes items in the beginning
list.shift()


//indexOf
console.log(list.indexOf(6))
//join
list.join("-")
console.log(list.join("'"))
//slice
sli = list.slice(2, 3)
console.log(sli)
console.log(list)
//splice
list.splice(1, 0)
console.log(list)

//map
let map_list = [4, 5, 8, 97, 99, 77, 5, 2, 4, 6]
let new_map_list = map_list.map(x => x + 2)
console.log(new_map_list)

//filter
let filter_list = [6, 8, 9, 7, 3, 4, 2]
let new_filter_list = filter_list.filter(x => x > 6)
console.log(new_filter_list)

//reduce
let reduce_list = [1, 6, 9, 7, 1, 2, 3]
let new_reduce_list = reduce_list.reduce((x, y) => x * y)
console.log(new_reduce_list)

//foreach
let foreach_list = [7, 8, 9]
foreach_list.forEach(x => console.log("FOREACH:", x * 2))


//find
let find_list = [1, 5, 9, 1, 0, 2, 6]
let find_index = find_list.find(x => x = 5)
console.log(find_index)
console.log("FIND_LAST:", find_list.findLast(x => x < 2))
console.log("FIND_LAST_INDEX:", find_list.findLastIndex(x => x < 2))


//fill
let fill_list = [1, 2, 3, 1]
fill_list.fill(1)
console.log(fill_list)

//concat
let list1 = [1, 2, 3]
let list2 = [2, 3, 4]
new_list_arr = list1.concat(list2)
console.log(new_list_arr)

//findIndex()
let fi_list = [14, 5, 8, 9, 0]
let fi_new_list = fi_list.findIndex(x => x > 5)
console.log(fi_new_list)

//find()
let fii_list = [14, 5, 8, 9, 0]
let fii_new_list = fii_list.find(x => x > 5)
console.log(fii_new_list)

//flat()
let flat_arr = [1, [2, 3], 5]
let new_flat_arr = flat_arr.flat()
console.log(new_flat_arr)

//flatMap()
let flat_map_arr = [1, [2, 3], 5]
let new_flat_map_arr = flat_map_arr.flatMap(x => x)
let new_map_arr = flat_map_arr.map(x => x)
console.log("MAP:", new_map_arr)
console.log("FLATMAP:", new_flat_map_arr)

//flat
let flat_lst = [1, 2, 3]
let new_flat_lst = flat_lst.map(x => x * 2)
console.log("NewFLATLIST:", new_flat_lst)

//reduce_right
let sub_list = [6, 5, 8, 7]
console.log(sub_list.reduceRight((x, y) => x * y))
console.log(sub_list.reduceRight((x, y) => x + y))
let sub_list1 = ['6', "5", "8", "7"]
console.log(sub_list1.reduceRight((x, y) => x + y))

//indexOf
let index_list = [1, 7, 8, 9, 10, 7, 3]
console.log(index_list.indexOf(9))
//lastIndexOf
console.log(index_list.lastIndexOf(7))

//find
let find_list1 = [0, 9, 7, 5]
let find_new_list = find_list1.find(x => x > 2)
console.log(find_new_list)

//at
let at_list = [0, 9, 7, 5]
console.log(at_list.at(-3))

//sort
let sort_list = ["grapes", "orange", "apple", 5]
sort_list.sort()
console.log(sort_list)

//reverse3
sort_list.reverse()
console.log(sort_list)

//with
let with_list = [1, 2, 3]
let new_with_list = with_list.with(1, 5)
console.log(new_with_list)
console.log(with_list)