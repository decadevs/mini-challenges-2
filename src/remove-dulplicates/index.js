function removeDuplicates(obj) {
  let store = [];
  let object = {};
  let values = Object.values(obj);
  let uniqueValues = values.map((el) => [...new Set(el)]);
  let revUniqueValues = [...uniqueValues].reverse();
  const check = (char, arr, index) => {
    for (let i = 0; i < arr.length - index - 1; i++) {
      if (arr[i].includes(char)) return true;
    }
  };
  for (let i = 0; i < uniqueValues.length; i++) {
    let holder = [];
    let innerArray = uniqueValues[i];
    for (let j = 0; j < innerArray.length; j++) {
      let letter = innerArray[j];
      if (check(letter, revUniqueValues, i) !== true) {
        holder.push(letter);
      }
    }
    store.push(holder);
  }
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let x = keys[i];
    object[x] = store[i];
  }
  return object;
}
removeDuplicates({
  432: ["A", "A", "B", "D"],
  53: ["L", "G", "B", "C"],
  236: ["L", "A", "X", "G", "H", "X"],
  11: ["P", "R", "S", "D"],
});
module.exports = removeDuplicates;
