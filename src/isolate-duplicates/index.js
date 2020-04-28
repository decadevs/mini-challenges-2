function isolateDuplicates(text) {
  
    if(typeof text !== 'string') throw new Error("Please enter a valid string");

    let counter = 0;
    const ARR_OF_REPEATED_STRING = text.match(/(.)\1{0,}/gi);
    let newStr = '';

    ARR_OF_REPEATED_STRING.map((str) => {

      if(str.length > 2) {
        counter++;
        let firstTwoChar = str.substring(0,2);
        let lastChars = str.substring(2,);
        newStr += `${firstTwoChar}[${lastChars}]`;
      }else{
        newStr += str;
      }

    });

    return [newStr, counter];
}

module.exports = isolateDuplicates;
