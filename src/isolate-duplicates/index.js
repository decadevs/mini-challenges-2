const isolateDuplicates = (text) => {
    if (typeof text !== 'string' ) throw new Error ("Please enter a valid string");
    const matchRepeatedString = text.match(/(.)\1{0,}/gi);
   
    let result = '';
    let counter = 0;
    let firstTwoChar;
    let remChar;
    matchRepeatedString.map(char => {
      if(char.length > 2){
        counter++
        firstTwoChar = char.substr(0, 2);
        remChar = char.substr(2);
        result += `${firstTwoChar}[${remChar}]`
      }else{
        result += char
      }
    });
   return [result, counter]
}

// console.log(isolateDuplicates())
module.exports = isolateDuplicates;
