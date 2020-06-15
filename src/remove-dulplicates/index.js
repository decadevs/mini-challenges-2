const removeDuplicates = obj => {
  let checkValueArr = []
  const resultObj = {};
  let sortedObjKey = Object.keys(obj).sort((a, b) => a + b).reverse();

  sortedObjKey.map(key => {
    let arr = [];

    obj[key].map(value => {
      if (!checkValueArr.includes(value)) {
        arr.push(value);
      }
      checkValueArr.push(value)
    });
    resultObj[key] = arr
  });

  return resultObj
};

module.exports = removeDuplicates;
