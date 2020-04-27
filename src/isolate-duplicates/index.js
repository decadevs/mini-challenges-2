function isolateDuplicates(text) {
    const resultArray = []
    let tmpString = ''
    let tmpStringLength = tmpString.length
    let duplicateString = []
    let duplicateCharacter = ''
   
    for(let character of text){
        
        if(character == tmpString[tmpStringLength-1] && character == tmpString[tmpStringLength-2]){
            tmpString += '[' + character
            duplicateCharacter = character
          }else if(duplicateCharacter !== character){
              tmpString += ']' + character
          }
        tmpString+= character

        }
}

console.log(isolateDuplicates("aaaabbcdefffffffg"))
module.exports = isolateDuplicates;
