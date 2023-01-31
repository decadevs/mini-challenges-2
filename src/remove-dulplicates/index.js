function removeDuplicates(obj) {
  let arr = Object.entries(obj)
  let newArr
  console.log(arr)
    for (let index = 0; index < arr.length; index++) {
        newArr = [...new Set(arr[index][1].sort())]
        console.log(newArr)
  }
}
console.log(removeDuplicates({
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"]
}))

module.exports = removeDuplicates;
