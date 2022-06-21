
function isolateDuplicates(text) {

    if(!(typeof text === 'string')){
        throw 'Please enter a valid string' // Check input type and throw error if not string
    }
    else{
        let duplicates = ''; // Declare duplicate of an empty string
        let duplicatesCount = 0; // Initianlize duplicates count
        let acceptableDuplicate = `${text[0]}${text[1]}` // This defines the first two char of text

        acceptableDuplicate

        var textArray = text.split('') // Convert text to array
        
        for (let i = 2; i < textArray.length; i++){ // Start iterator after acceptable duplicates

            let lastAcceptableDuplicateCharIndex = acceptableDuplicate.length - 1; // 1
            let firstAcceptableDuplicateCharIndex = acceptableDuplicate.length - 2 // 0

            if(textArray[i].toLowerCase() === acceptableDuplicate.charAt(lastAcceptableDuplicateCharIndex)
            .toLowerCase() && textArray[i].toLowerCase() === acceptableDuplicate.charAt(firstAcceptableDuplicateCharIndex)
            .toLowerCase()){ // check if next char is same as acceptable duplicates
                duplicates += textArray[i] // Append such occurences to duplicate string
             
               
                if((textArray.length - 1) > i && textArray[i]
                .toLowerCase() !== textArray[i + 1].toLowerCase()){ // If text array still has values and two consecutive element isn't the same
                    
                    acceptableDuplicate += `[${duplicates}]` // Box existing duplicates in [ ] and append to first to acceptable duplicates
                    duplicatesCount++ // Add 1 to duplicates count
                    duplicates = '' // Reset duplicates holder to be empty to avoid appending old duplicates to next duplicates
                }
            }else{
                    acceptableDuplicate += textArray[i] // append char if its not the same as acceptable duplicates
                }
        }

        if(duplicates.length > 0){
            acceptableDuplicate += `[${duplicates}]`;
            duplicatesCount++
        }
        
        return [acceptableDuplicate, duplicatesCount]
 
    }
    
}

module.exports = isolateDuplicates;
