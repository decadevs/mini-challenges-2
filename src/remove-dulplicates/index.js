function removeDuplicates(obj) {
  let arrayOfKeys = Object.keys(obj);
  let tempHolder = []
  const output = {};
  let objKey = arrayOfKeys.sort((a,b) => a - b).reverse();

  objKey.map(key => {
    let newArr = [];
    obj[key].map(currentValue => {
        if(!tempHolder.includes(currentValue)){
            newArr.push(currentValue);
        }
        tempHolder.push(currentValue)
    });
    output[key] = newArr
});
   return output

}

module.exports = removeDuplicates;
