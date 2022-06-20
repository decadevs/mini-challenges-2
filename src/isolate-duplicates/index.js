/**
 * @param {string} text The string of brackets.
 * @returns {[string, number]} The duplicates in brackets and total duplicates. 
 */

function isolateDuplicates(text) {
    
    if(typeof(text) !== "string"){
        throw "Please enter a valid string";
    }

    let countDuplicates = 0;
    let totalDuplicates = 0;
    const duplicatesArray = []; 

    //loop through text string and push accordingly
    for(let i=0; i<text.length ; i++){
        duplicatesArray.push(text[i]);
        if(((text[i+1] !== undefined) && text[i].toLowerCase() === text[i+1].toLowerCase())){
            
            if( countDuplicates === 1){
                duplicatesArray.push('[');
            }
            countDuplicates++;

        }
        else if(((text[i+1] !== undefined) && text[i].toLowerCase() !== text[i+1].toLowerCase()) || (i === text.length - 1)){//check if end of string
           
            if(countDuplicates > 1){
                duplicatesArray.push(']');  
                totalDuplicates ++;
            }
            countDuplicates = 0;
                      
        }
    }
    return [duplicatesArray.join(""), totalDuplicates];
    
}

module.exports = isolateDuplicates;
