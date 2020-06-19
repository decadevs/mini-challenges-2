function removeDuplicates(obj) {
  let arr = []
// get an arrray of every key of the object and sort the array in descending order
  let objKeys = Object.keys(obj).sort((a, b) => b - a);

  // make a set of unique elements for each object value and put each set in an array
  objKeys.forEach(key =>{
    set = new Set(obj[key]);
    arr.push([...set]);
  });

  // loop through the array of values and remove all non-unique elements from the preceeding nested arrays
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let elem = arr[i][j];
      
      for (let k = i + 1; k < arr.length; k++) {
        if (arr[k].includes(elem)) {
          let index = arr[k].indexOf(elem);
          arr[k].splice(index,1);
        }
      }
    }
  }

  // create an object and pair each key to its corresponding value
  obj = {}
  for(i in objKeys){
    obj[objKeys[i]] =  arr[i];
  }

  return obj;
};


module.exports = removeDuplicates;

