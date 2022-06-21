function isolateDuplicates(text) {
  //handles non-string characters
  if (arguments.length < 1 || typeof text !== "string"){
    throw ("Please enter a valid string")
  }
  //create variables
  let outputArr = [], noOfDuplicate = 0, count = 0;
  text = text.split("");
  //loop through text
  for (let i = 0, n = text.length; i < n; i++){
    let char = text[i]
    let nextChar = text[i + 1]
    outputArr.push(char);
    if (nextChar != undefined && char.toLowerCase() == nextChar.toLowerCase()){
      noOfDuplicate++;
      if (noOfDuplicate == 2){
        outputArr.push('[');
        count++;
      }
    }
    else if (nextChar != undefined && char.toLowerCase() !== nextChar.toLowerCase() || i == text.length - 1){
      if (noOfDuplicate > 1){
        outputArr.push("]");
      }
      noOfDuplicate = 0;
    }
  }
  return [outputArr.join(""), count];
}

module.exports = isolateDuplicates;
