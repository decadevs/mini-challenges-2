function removeDuplicates(obj) {
  const keys = Object.keys(obj);
  const duplicates = {};
  let temp = [];

  keys.reverse().forEach((key) => {

    obj[key] = [...new Set(obj[key])];
    obj[key].forEach((char) => {
      if (!duplicates[char]) {
        duplicates[char] = true;
        temp.push(char);
      }
    });
    obj[key] = temp;
    temp = [];
  });
  return obj;
}


module.exports = removeDuplicates;
