function removeDuplicates(obj) {
    let keys = Object.keys(obj).sort((a, b) => Number(b) - Number(a));
    for (let key in obj) {
      let newValues = new Set(obj[key]);
      obj[key] = [...newValues];
    }
  
    let myValues = obj[keys[0]];
  
    keys.slice(1).forEach (function (key) {
      obj[key] = obj[key].filter(element => !myValues.includes(element));
      myValues = myValues.concat(obj[key]);
    });
  
    return obj;
}

module.exports = removeDuplicates;
