function removeDuplicates(obj) {
  let element = 0;
  let existingObj = {};
  let finalArr = [];
 for (let i = 0; i < obj.lenght; i++){
  element = obj[i];
  if(!existingObj[element]){
    finalArr.push(element);
    existingObj[element] = true;
  }
 }
return finalArr;
}

module.exports = removeDuplicates;
