function isolateDuplicates(text) {
  const resultArray = [];
  let tmpString = "";
  let tmpStringLength = tmpString.length;
  let count = 0
  let duplicateCharacter = [];
  let lowerString

  if(!text) throwError();
      
  if(typeof text !== 'string')  throw'Please enter a valid string'

  const newText = text.toLowerCase()
      
  for (let i = 0; i < text.length; i++ ) {
    tmpStringLength = tmpString.length;
    lowerString = tmpString.toLowerCase()
    
    if (
      newText[i] === lowerString[tmpStringLength - 1] &&
      newText[i] === lowerString[tmpStringLength - 2]
    ) {
          duplicateCharacter.push(text[i])
          
         
    }else if(newText[i] !== lowerString[tmpStringLength - 1] && duplicateCharacter.length > 0){
        tmpString += "[" + duplicateCharacter.join('') + ']'+ text[i]
        duplicateCharacter = []
        count++
    }else{
      tmpString += text[i]
    } 
   
    if(i === newText.length-1 && duplicateCharacter.length > 0){
      tmpString += "[" + duplicateCharacter.join('') + ']'
      duplicateCharacter = []
      count++
   }
  }
  resultArray.push(tmpString,count)
  return resultArray
}
module.exports = isolateDuplicates;
