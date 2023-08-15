function isolateDuplicates(text) {  
   if(typeof text == 'string' && text.length !== 0) {
        let duplicate = {};
        let extraAlpha = "";
        let str ='';
        let count = 0;
        let returnCount = [];
        let string = text.toLowerCase()
     
        for (let i = 0; i < string.length; i++) {
            if(extraAlpha != string[i]) {
                 if(duplicate[extraAlpha] > 2) {
                    str += ']'
                      
                    } 
    
                        duplicate[extraAlpha] = 0;
                        extraAlpha = string[i]
                }
                 if(!duplicate[string[i]]) {
                    duplicate[string[i]] = 1;
    
                 } else if(duplicate[string[i]] == 1) {
                    duplicate[string[i]]++
    
                 } else if(duplicate[string[i]] == 2) {
                    str += '['
                    duplicate[string[i]]++
                    count++
                 }
                 
                str += text[i]
            }
                if(duplicate[extraAlpha] > 2) {
                    str += ']'   
                }
                
                returnCount.push(str)
                returnCount.push(count)
   
        return returnCount;
   } else  {
      throw Error("Please enter a valid string");
   }
}   
module.exports = isolateDuplicates;
