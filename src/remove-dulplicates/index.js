function removeDuplicates(obj) {
  const neww = Object.keys(obj);
  neww.sort((a, b) => a - b);
  const tracker = {};

  for (let i = neww.length - 1; i >= 0; i--) {
    let arr = [];

    for (let j = 0; j < obj[neww[i]].length; j++) {

      if (tracker.hasOwnProperty(obj[neww[i]][j])) {
        continue;
      }
      arr.push(obj[neww[i]][j]);
      tracker[obj[neww[i]][j]] = 0;
    }
    obj[neww[i]] = arr;
  }
  return obj;



}
console.log(removeDuplicates({
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
}))
module.exports = removeDuplicates;
