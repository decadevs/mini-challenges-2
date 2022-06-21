function removeDuplicates(obj) {
let keys = object.keys(obj)
.map(Number)
.sort((a,b)=> b-a);

for(let key of keys){
  let keyvalues = obj[key];
  keyvalues
}
let total = [];
let newArr = [];
for(let letter of keyvalues){
  if(!total.includes(letter)){
    newArr.push(letter);
    total.push(letter);
  }
  return newArr;
}
let newOrder = {};
    for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        values = newArr[key];
        newOrder[key] = values;
    }
    return newOrder;
  }
module.exports = removeDuplicates;

