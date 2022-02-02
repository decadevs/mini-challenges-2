function isolateDuplicates(text) {
  //Check the first condition for text is a valid string
  if(typeof text === "string"){
    //Convert the text to array using the spread operator
    let txtArr = [...text]
    //Declare variables to hold the various values to simplify the code
    let textString = text[0]+text[1]
    let duplicatesString = ""
    let duplicatesStringNo = 0

    //Loopthrough the text array starting at index 2 while comparing
    for(let i = 2; i < txtArr.length; i++){

      if(txtArr[i].toLowerCase() == textString[textString.length-1].toLowerCase() &&
        txtArr[i].toLowerCase() == textString[textString.length-2].toLowerCase()) {
        duplicatesString += txtArr[i]
        duplicatesString

        if(i < txtArr.length-1 && txtArr[i].toLowerCase() !== txtArr[i+1].toLowerCase() ){

          textString += "["+duplicatesString+"]"
          duplicatesStringNo++
          duplicatesString = []

        }
       }
      else{
        textString += txtArr[i]
       }
    }


    duplicatesStringNo

    if(duplicatesString.length > 0){
      textString += "["+duplicatesString+"]"
      duplicatesStringNo++
    }
    return [textString,duplicatesStringNo]
  }
  else {
    throw "Please enter a valid string"
  }

}


module.exports = isolateDuplicates;
