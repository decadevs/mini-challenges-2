
 const obj = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
};

function removeDuplicates(obj) {

  const sortedKeys = Object.keys(obj);
  const keys = sortedKeys.reverse();

  const duplicates = [];
  const noDuplicates = {};

  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < obj[keys[i]].length; j++) {
      if (!duplicates.includes(obj[keys[i]][j])) {
        if (noDuplicates[keys[i]] === undefined) {
          noDuplicates[keys[i]] = [];
        }
        noDuplicates[keys[i]][j] = obj[keys[i]][j];
        duplicates.push(obj[keys[i]][j]);
      }
    }

    if (noDuplicates[keys[i]] === undefined) {
    } else {
      noDuplicates[keys[i]] = noDuplicates[keys[i]].filter(
        (el) => el !== undefined
      );
    }
  }

  return noDuplicates;
   }

module.exports = removeDuplicates;

