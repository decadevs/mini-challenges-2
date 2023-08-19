function isolateDuplicates(text) {
    if (typeof text !== 'string') {
        throw Error("Please enter a valid string");
      }
    
      let result = '';
      let duplicateCount = 0;
      let bracketCount = 0
      let currentChar = '';
    
      for (let i = 0; i < text.length; i++) {

        if (text[i].toLowerCase() === currentChar.toLowerCase()) {
            if(duplicateCount == 1 ) {
                result += '[';
                bracketCount++
              }
            duplicateCount++;
        } else {
            if(duplicateCount > 1){
                result += ']';
            }
            duplicateCount = 0;
        }

        currentChar = text[i];
        result += currentChar;
      }

      for(let i = result.length - 1; i > 0; i--){
        if(result[i] == '['){
            result += ']';
           return [result, bracketCount];
        }else if(result[i] == ']'){
            return [result, bracketCount];
        }
      }

      return [result, bracketCount];
}

module.exports = isolateDuplicates;
