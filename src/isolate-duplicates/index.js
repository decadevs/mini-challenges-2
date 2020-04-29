function isolateDuplicates(text) {
    if(typeof text==="string"){
        let arrayOfText=[...text]
        let stringOfCharacter=text[0]+text[1]
        let stringOfDuplicate=""
        let noOfStringOfDuplicate=0
        for(var i=2;i<arrayOfText.length;i++){
          if(arrayOfText[i].toLowerCase()==stringOfCharacter[stringOfCharacter.length-1].toLowerCase()&&arrayOfText[i].toLowerCase()==stringOfCharacter[stringOfCharacter.length-2].toLowerCase()){
              stringOfDuplicate+=arrayOfText[i]
              stringOfDuplicate
             if(i<arrayOfText.length-1&&arrayOfText[i].toLowerCase()!==arrayOfText[i+1].toLowerCase()){
                stringOfCharacter+="["+stringOfDuplicate+"]"
                noOfStringOfDuplicate++
                stringOfDuplicate=[]
              }
           }
          else{
            stringOfCharacter+=arrayOfText[i]
           }
        }
        noOfStringOfDuplicate
        if(stringOfDuplicate.length>0){
           stringOfCharacter+="["+stringOfDuplicate+"]"
          noOfStringOfDuplicate++
        }
        return [stringOfCharacter,noOfStringOfDuplicate]
      }
    else {
        throw "Please enter a valid string"
      }
}

module.exports = isolateDuplicates;
