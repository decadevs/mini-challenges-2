function removeDuplicates(obj) {
    let keyArr = [];
for (let keys in obj) {
  keyArr.push(keys);
}

let sortedArr = keyArr.reverse();

let checker = [];
let newObj = {};
let objArr = [];

for (let i = 0; i < sortedArr.length; i++) {
  for (let j = 0; j < obj[sortedArr[i]].length; j++) {
    if (!checker.includes(obj[sortedArr[i]][j])) {
      checker.push(obj[sortedArr[i]][j]);
      objArr.push(obj[sortedArr[i]][j]);
    }
  }
  newObj[sortedArr[i]] = objArr;
  objArr = [];
}

return newObj;
}

module.exports = removeDuplicates;
