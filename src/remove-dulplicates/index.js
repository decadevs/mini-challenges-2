function removeDuplicates(obj) {
  let myKeys = Object.keys(obj);
  let keysHierarchy = myKeys.sort((a, b) => a - b);
  let compareArr = [];
  let myReturnObj = {};
  keysHierarchy.forEach((element) => {
    myReturnObj[element] = obj[element];
  });
  for (let i = keysHierarchy.length - 1; i >= 0; i -= 1) {
    let objArr = myReturnObj[keysHierarchy[i]];

    for (let j = 0; j < objArr.length; j += 1) {

      let objArrItem = myReturnObj[keysHierarchy[i]][j];

      if (!compareArr.includes(objArrItem)) {
        compareArr.push(objArrItem);
      } else if (compareArr.includes(objArrItem)) {
        objArr.splice(j, 1);
        //console.log(myReturnObj[keysHierarchy[i]])
        j -= 1;
      }
    }
  }
  return myReturnObj;
}

module.exports = removeDuplicates;
