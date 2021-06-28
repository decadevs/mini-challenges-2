function isolateDuplicates(text) {
    
    if( typeof(text) !== "string"){ throw new Error('Please enter a valid string') }
        let lowerText = text.toLowerCase()
        let check = [], duplicates = [], str = '', count = 0, array = []
        for(let i=0; i< text.length; i++){
            if(lowerText[i+1]===lowerText[i]){
                if(check.length<2){
                    check.push(text[i])
                }else{duplicates.push(text[i])}
            }else{
                if(check.length<2){
                    check.push(text[i])
                }else{duplicates.push(text[i])}
                for(items of check){
                    str += items
                }
                if(duplicates.length > 0){
                    count += 1
                    str += '['
                    for(items of duplicates){
                        str += items
                    }
                    str += ']'
                }
                check = []
                duplicates = []
            }
        }
        array.push(str,count)
        return array   
    

}

//console.log(isolateDuplicates("How are you"))
module.exports = isolateDuplicates;
