function removeDuplicates(obj) {
   const keyOfArr = Object.keys(obj);
    keyOfArr.sort((a, b) => a - b);
    const blocker = [];

    for (let j = keyOfArr.length - 1; j >= 0; j--) {
      let arr = [];

      for (let k = 0; k < obj[keyOfArr[j]].length; k++) {
        if (blocker.hasOwnProperty(obj[keyOfArr[j]][k])) {
          continue;
        }
        arr.push(obj[keyOfArr[j]][k]);
        blocker[obj[keyOfArr[j]][k]] = 0;
      }
      obj[keyOfArr[j]] = arr;
    }
    return obj;
  }



module.exports = removeDuplicates;