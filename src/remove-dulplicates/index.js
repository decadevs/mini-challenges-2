function removeDuplicates(obj) {
  let arr = Object.entries(obj)
  let newArr
  let keysArr = []
  let valuesArr = []
  let c = []
  let diff = (a, b) => [...new Set([...a].filter((x) => !b.includes(x)))];

  for (let index = 0; index < arr.length; index++) {
    keysArr.push(arr[index][0])
    newArr = [...new Set(arr[index][1])]
    valuesArr.push(newArr)
  }
  let finalArr = valuesArr.reverse().map((value) => {
    const subCollector = c;
    c = [...new Set([...c, ...value])];
    return [...new Set(diff(value, subCollector))]
  })
  finalArr = finalArr.reverse()
  const newObj = {}
  keysArr.forEach((element, index) => {
    let newElement = element
    newObj[newElement] = finalArr[index]
  })
  return newObj
}

module.exports = removeDuplicates;
