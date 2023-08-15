function isolateDuplicates(text) {
    if (typeof text !== 'string') {
        throw Error("Please enter a valid string");
    }

    let duplicate = {}; 
    let newString = ""; 
    let str = ''; 
    let count = 0; 
    let stringCount = []; 

    let newTest = text.toLowerCase(); 

    for (let i = 0; i < newTest.length; i++) {

        if (newString !== newTest[i]) {

            if (duplicate[newString] > 2) {
                str += ']'; 
            }
            duplicate[newString] = 0; 
            newString = newTest[i]; 
        }

        
        if (!duplicate[newTest[i]]) {
            duplicate[newTest[i]] = 1; 
        } else if (duplicate[newTest[i]] == 1) {
            duplicate[newTest[i]]++; 
        } else if (duplicate[newTest[i]] == 2) {
            str += '['; 
            duplicate[newTest[i]]++; 
            count++; 
        }

        str += text[i]; 
    }

    
    if (duplicate[newString] > 2) {
        str += ']'; 
    }

    stringCount.push(str); 
    stringCount.push(count); 

    return stringCount; 
}

module.exports = isolateDuplicates;
