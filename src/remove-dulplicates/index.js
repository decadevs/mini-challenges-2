function removeDuplicates(obj) {
  for(let key in obj) {
    obj[key] = [...new Set(obj[key])]
  }
  let newObj = obj;
  for(let objKey in obj) {
    obj[objKey].forEach((firstElem) => {

      for (let objKey2 in newObj){
        newObj[objKey2].forEach((secondElem) => {
          if(firstElem === secondElem && objKey != objKey2) {
            newObj[objKey] = newObj[objKey].filter((value) => value !== firstElem)
          }
        });
      }
    });
  }
  return newObj;
}

module.exports = removeDuplicates;
