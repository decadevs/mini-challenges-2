function finalStringuplicates(text) {
  if(typeof text !== 'string' ) throw new Error("Please enter a valid string");

  let counter = 0
  let finalString = '';
  let arrOfRepeatedString = text.match(/([a-z])\1{0,}/gi);


  for(let word of arrOfRepeatedString){
      if(word.length > 2){
          counter+= 1;
          let remLetters = word.split('').splice(2).join('');
          let firstTwoLetters = word.substring(0,2);

          finalString += `${firstTwoLetters}[${remLetters}]`

      }else{
        finalString += word
      }
    }

    return [finalString, counter]

}

module.exports = finalStringuplicates;
