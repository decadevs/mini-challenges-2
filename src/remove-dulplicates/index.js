function removeDuplicates(obj) {
        const objectKeys = Object.keys(obj);
      const newObj = {};
      let newArr = [];
    
      objectKeys.reverse().forEach((key) => {
    
          obj[key] = [...new Set(obj[key])];
          obj[key].forEach((char) => {
              if (!newObj[char]) {
                  newObj[char] = true;
                  newArr.push(char);
              }
          });
          obj[key] = newArr;
          newArr = [];
      });
      return obj;
}
console.log(removeDuplicates({
    "1": ["C", "F", "G"],
    "2": ["A", "B", "C"],
    "3": ["A", "B", "D"]
  }))
module.exports = removeDuplicates;
