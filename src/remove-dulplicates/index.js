function removeDuplicates(obj) {
  let arr = Object.entries(obj);
  let res = [];
  let duplicate = [];
  let mapping;
  let result;

  for (let i = arr.length - 1; i >= 0; i--) {
    let objIdx = arr[i];
    let key = objIdx[0];
    let val = objIdx[1];
    let valSort = [];

    for (let j = 0; j < val.length; j++) {
      let valIdx = val[j];

      if (!duplicate.includes(valIdx) && !valSort.includes(valIdx)) {
        duplicate.push(valIdx);
        valSort.push(valIdx);
      }
    }
    mapping = [key, valSort];
    res.push(mapping);
  }
  result = Object.fromEntries(res);
  return result;
}

/*console.log(removeDuplicates({
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
}))

console.log(removeDuplicates({
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"]
}))*/

module.exports = removeDuplicates;
