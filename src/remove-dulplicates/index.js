const removeDuplicates = (obj) => {
    let checkValueArr = []
    const resultObj = {};
let objKey = Object.keys(obj).sort((a,b) => a + b).reverse();
    
objKey.map(key => {
    let arr = [];
    obj[key].map(value => {
        if(!checkValueArr.includes(value)){
            arr.push(value);
        }
        checkValueArr.push(value)
    });
    resultObj[key] = arr
});
   return resultObj
};

// const obj = {
//     "1": ["C", "F", "G"],
//     "2": ["A", "B", "C"],
//     "3": ["A", "B", "D"],
//   };
//   console.log(removeDuplicates(obj));
module.exports = removeDuplicates;
