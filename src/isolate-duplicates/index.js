function isolateDuplicates(text) {
    if(typeof(text) !== "string" ) {
     throw Error("Please enter a valid string");
     }
    
            let duplicate = {};
            let newString = "";
            let str = '';
            let count = 0;
            let stringCount = [];
            let newText = text.toLowerCase()
    
           for(let i = 0; i < newText.length; i++) {
            if(newString !== newText[i]) {
                 if(duplicate[newString] > 2) {
    
                        str += ']';
    
                    }
    
                    duplicate[newString] = 0;
                     newString = newText[i];
                 }    
    
                 if(!duplicate[newText[i]]) {
    
                    duplicate[newText[i]] = 1;
    
                 } else if(duplicate[newText[i]] == 1) {
    
                    duplicate[newText[i]]++
    
                 } else if(duplicate[newText[i]] == 2) {
    
                    str += '['
    
                    duplicate[newText[i]]++
                    count++
                }
                 str += text[i];
                }
                 if(duplicate[newString] > 2) {
    
                    str += ']'
                }
                 stringCount.push(str);
                 stringCount.push(count)
                 
                 return stringCount;
    
        }
    


module.exports = isolateDuplicates;
