function removeDuplicates(obj) {


  let arr = [];
  const arrayIndex = 1; //The index of the array inside object (obj).
  const keyIndex = 0;   //The index of key inside object (obj).
  let key = Object.keys(obj);
  let entry = Object.entries(obj);


  //Sort the keys in acending order
  key = key.sort((a, b) => a - b);

  //The following codes remove duplicate string in the same array.
  for(let j = 0; j < key.length; j++){

    for(let k = 0; k < entry[j][arrayIndex].length; k++){
      if(!(arr.includes(entry[j][arrayIndex][k]))){
        arr.push(entry[j][arrayIndex][k])
      }

    }

      obj[entry[j][keyIndex]] = arr;
      arr = [];

  }

  for(let i = 0; i < key.length - 1; i++){

    obj[key[i]] = obj[key[i]].filter(valu => !(obj[key[i + 1]].includes(valu)));

  }

  return obj;

}

module.exports = removeDuplicates;
