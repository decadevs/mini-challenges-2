function removeDuplicates(obj) {
  let myKeys = Object.keys(obj);
  let myValues = Object.values(obj);
  let keysHierarchy = myKeys.sort((a, b) => a - b);
  let compareArr = [];
  let myReturnObj = {};
  keysHierarchy.forEach((element) => {
    myReturnObj[element] = obj[element];
  });
  for (let i = keysHierarchy.length - 1; i >= 0; i -= 1) {
    for (let j = 0; j < myReturnObj[keysHierarchy[i]].length; j += 1) {
      if (!compareArr.includes(myReturnObj[keysHierarchy[i]][j])) {
        compareArr.push(myReturnObj[keysHierarchy[i]][j]);
      } else if (compareArr.includes(myReturnObj[keysHierarchy[i]][j])) {
        myReturnObj[keysHierarchy[i]].splice(j, 1);
        //console.log(myReturnObj[keysHierarchy[i]])
        j -= 1;
      }
    }
  }

  return myReturnObj
}
const obj = {
  "350": ["C", "A", "A"],
  "291": ["C", "C", "A", "A", "A", "C", "G"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "91": ["P", "R", "S", "D"],
  "53": ["L", "G", "B", "C"],
  "12": ["A", "A", "B", "D"],
};


module.exports = removeDuplicates;
