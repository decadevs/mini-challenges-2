function removeDuplicates(obj) {
  const uniqueVal = [];
  const elemFound = [];
  const finalAns = {};

  const keys = Object.keys(obj)
      .map(Number)
      .sort((a, b) => b - a);

  while (uniqueVal.length < keys.length) {
      uniqueVal.push([])
  }

  let numCount = 0;
  for (let arr of keys) {
      const array = obj[arr];

      array.forEach(e => {
          if (!elemFound.includes(e)) {
              uniqueVal[numCount].push(e);
              elemFound.push(e)
          }
      })

      numCount+= 1
  }

  for (let i = 0; i < keys.length; i++) {
      finalAns[keys[i]] = uniqueVal[i]
  }
  return finalAns
}


module.exports = removeDuplicates;
