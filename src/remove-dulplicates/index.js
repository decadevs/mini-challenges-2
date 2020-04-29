/**MY ALGORITHM
 * 1. sort the keys in descending order
 * 2. create a new set where all unique values will be stored
 * 3. create a new object using the various keys with their values as an empty array
 * 4. loop through the values of each array
 *      -if the value is not on the unique set
 *          -add the value to the new obj and also to the unique set
 * 5. return the new obj
 */
function removeDuplicates(obj) {
  let newObj = {};
  let uniqueValues = new Set();

  let keys = Object.keys(obj).sort((a, b) => Number(b) - Number(a));

  for (let key of keys) {
    newObj[key] = [];
    let array = obj[key];

    for (let item of array) {
      if (!uniqueValues.has(item)) {
        newObj[key] = [...newObj[key], item];
        uniqueValues.add(item);
      }
    }
  }

  return newObj;
}
console.log(
  removeDuplicates({
    "432": ["A", "A", "B", "D"],
    "53": ["L", "G", "B", "C"],
    "236": ["L", "A", "X", "G", "H", "X"],
    "11": ["P", "R", "S", "D"],
  })
);

module.exports = removeDuplicates;
