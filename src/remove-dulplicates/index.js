function removeDuplicates(obj) {
  let outputObject = {};

  let sortedKeys = Object.keys(obj).map(key => Number(key)).sort((a, b) => b - a);
console.log(sortedKeys)
  sortedKeys.forEach(key => {
    let inputArray = obj[key];
    let uniqueArray = [];

    inputArray.forEach(item => {
      // Check if the item is already in the uniqueArray or any other array
      if (!uniqueArray.includes(item) && !isStringInOtherArray(outputObject, item, key)) {
        uniqueArray.push(item);
      }
    });

    if (uniqueArray.length >= 0) {
      outputObject[key] = uniqueArray;
    }
  });

  return outputObject;
}

// Helper function to check if a string is in any other array
function isStringInOtherArray(object, item, currentKey) {
  for (let key in object) {
    if (object.hasOwnProperty(key) && key !== currentKey) {
      if (object[key].includes(item)) {
        return true;
      }
    }
  }
  return false;
}

  
  // Helper function to check if a string is in any other array
  function isStringInOtherArray(object, item, currentKey) {
    for (let key in object) {
      if (object.hasOwnProperty(key) && key !== currentKey) {
        if (object[key].includes(item)) {
          return true;
        }
      }
    }
    return false;
  }
  
  let arryObj = {
    "4": ["A"],
      "10": ["B"],
      "3": ["C"],
      "1": ["D"],
      "2": ["E"],
      "26": ["F", "Z"],
      "5": ["G"],
      "8": ["H"],
      "11": ["I", "B"],
      "12": ["J", "I"],
      "13": ["K", "J"],
      "14": ["L", "K"],
      "15": ["M", "L"],
      "7": ["N"],
      "6": ["O"],
      "16": ["P", "M"],
      "9": ["Q"],
      "17": ["R", "P"],
      "18": ["S", "R"],
      "19": ["T", "S"],
      "20": ["T", "U"],
      "21": ["V", "T"],
      "22": ["W", "V"],
      "23": ["X", "W"],
      "24": ["X", "Y"],
      "25": ["Y", "Z"],
  };
  
  let result = removeDuplicates(arryObj);
  console.log(result);
  
module.exports = removeDuplicates;
