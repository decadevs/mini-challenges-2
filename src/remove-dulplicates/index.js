/*
PseudoCode
- change the object to an array and sort the array in reverse to get the largest numbers (keys) first
- make empty array to hold the new values
- make empty object to hold the final ordered object
- loop through the keys and values i.e loop through the sorted array and the index of each value in the array
- if the array does not have a value, add it to the array
- return the new object

*/

function removeDuplicates(obj) {
    let myObj = Object.keys(obj)
    console.log(myObj);

    let sortedObj = myObj.sort((a, b) => (a + b)).reverse()

    let myArr = [];
    let newObj = {};

    for (let i = 0; i < sortedObj.length; i++) {
        let arr = []; // use this to hold values that have yet to be added
        let value = obj[sortedObj[i]]

        for (let j = 0; j < value.length; j++) {
            if (!myArr.includes(value[j])) {
                arr.push(value[j])
            }
            myArr.push(value[j]);
        }
        newObj[sortedObj[i]] = arr;
    }
    return newObj;
};



module.exports = removeDuplicates;