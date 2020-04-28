function isolateDuplicates(text) {
    const resultArray = [];
    let tmpString = "";
    let tmpStringLength = tmpString.length;
    let count = 0
    let duplicateCharacter;

    if(!text || typeof text !== 'string') return 'Please enter a valid string'
  
    for (let character of text) {
      tmpStringLength = tmpString.length;
      if (
        character === tmpString[tmpStringLength - 1] &&
        character === tmpString[tmpStringLength - 2]
      ) {
        if (tmpString.lastIndexOf("[") > tmpString.lastIndexOf("]")) {
            console.log(tmpString.indexOf(character))
          tmpString += character;
          duplicateCharacter = character;
        }else{
            tmpString += "[" + character;
            duplicateCharacter = character;
            count++
        }
        
      } else if (duplicateCharacter && duplicateCharacter !== character) {
        tmpString += "]" + character;
        duplicateCharacter = "";
      }else{
        tmpString += character;
      }
      
    }
  
    resultArray.push(tmpString,count)
    return resultArray
  }
module.exports = isolateDuplicates;
