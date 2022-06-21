//function removeDuplicates(obj) {}
function removeDuplicates(obj) {
  //get all the keys in the object into an array
  const arr_keys = []

  const obj_duplicates = {};
  let sorted_arr = [];

  for(let key in obj){
      arr_keys.push(key)
  }
  arr_keys.reverse().forEach((key) => {
      //for every array in the object re-assign its value after removing depulicate
    obj[key] = [...new Set(obj[key])];
      //for every character in each array before assigning it as key to the object check if its value is true
    obj[key].forEach((char) => {
      if (!obj_duplicates[char]) {
        obj_duplicates[char] = true;
       sorted_arr.push(char);
      }
    });
    obj[key] = sorted_arr;

   sorted_arr = [];
  });
  return obj;
}

module.exports = removeDuplicates;
