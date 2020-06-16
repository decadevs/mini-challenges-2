function isolateDuplicates(text) {
  if(text === undefined || typeof text !== "string") {
    throw Error("Please enter a valid string");
  }

  //FIND REPEATED PATTERNS
  let regex = /(.)\1*/gi;

  //STORE THE REPEATED LETTERS UNIQUELY
  const groupedLetters = text.match(regex);
  const bound = 2;
  let newString = ""; let trackRepeat = 0;

  for(letters of groupedLetters){
    if(letters.length>bound){
      newString += letters.slice(0,bound).concat("[").concat(letters.slice(bound)).concat("]");
      trackRepeat++;
    }else{
      newString += letters;
    }
  }

  return [newString,trackRepeat];

}

module.exports = isolateDuplicates;
