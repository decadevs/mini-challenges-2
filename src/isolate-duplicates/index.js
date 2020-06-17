function isolateDuplicates(text) {

    if(typeof text !== 'string' ) throw new Error("Please enter a valid string");

    let count = 0
    let isolated = '';
    let arrOfRepeatedString = text.match(/([a-z])\1{0,}/gi);
    
   
    for(let word of arrOfRepeatedString){
         if(word.length > 2){
            count+= 1;
            let firstChars = word.split('').splice(0,2).join(''); 
            let lastChars = word.substring(2,);
            isolated += (`${firstChars}[${lastChars}]`)
        }else{
            isolated += word
        }
    }
       
    return [isolated, count]
    
}

module.exports = isolateDuplicates;
