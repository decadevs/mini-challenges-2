function isolateDuplicates(text) {
  if (typeof text !== 'string') {
    throw new Error ("Please enter a valid string");
  }

  let textSplit = text.match(/(.)\1*/gi); //Split similar charcter irrespective of the case

  let finalStr = "";
  let count = 0;
  for (let i = 0; i < textSplit.length; i++) {
    if (textSplit[i].length < 3) {
      finalStr += textSplit[i];
    }
    else {
      let string = textSplit[i].slice(0,2) + "[" +
      textSplit[i].slice(2, textSplit[i].length) + "]";
      finalStr += string;
      count++;
    }
  }
return [finalStr, count];
}

module.exports = isolateDuplicates;
