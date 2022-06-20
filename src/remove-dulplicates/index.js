/**
 * @param {object} obj The object with arrays of strings to be sorted. 
 * @returns {object} The sorted object.
 */

function removeDuplicates(obj) {
	let keysArr = Object.keys(obj).sort((a, b) => b - a);
	const seenArr = [];
	const orderedObj = {};

  // loop through each index of object array
	for (let i = 0; i < keysArr.length; i++) {
      for (let j = 0; j < obj[keysArr[i]].length; j++) {
          if (!orderedObj.hasOwnProperty(keysArr[i])) {
            orderedObj[keysArr[i]] = []; //create new array
          }
          if (!seenArr.includes(obj[keysArr[i]][j])) { // if seen, ignore
            orderedObj[keysArr[i]][j] = obj[keysArr[i]][j];
            seenArr.push(obj[keysArr[i]][j]);
          }
      }
      orderedObj[keysArr[i]] = orderedObj[keysArr[i]].filter(function( element ) {
          return element !== undefined; // filter undefined indices
      });
	}

  return orderedObj;

}
 
module.exports = removeDuplicates;
  