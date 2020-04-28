function isolateDuplicates(text) {
    if(typeof text==="string"){
        let arrayOfText=[...text]
        let arrayOfCharacter=text[0]+text[1]
        let arrayOfDuplicate=""
        let noOfArrayOfDuplicate=0
        for(var i=2;i<arrayOfText.length;i++){
          if(arrayOfText[i].toLowerCase()==arrayOfCharacter[arrayOfCharacter.length-1].toLowerCase()&&arrayOfText[i].toLowerCase()==arrayOfCharacter[arrayOfCharacter.length-2].toLowerCase()){
              arrayOfDuplicate+=arrayOfText[i]
              arrayOfDuplicate
             if(i<arrayOfText.length-1&&arrayOfText[i].toLowerCase()!==arrayOfText[i+1].toLowerCase()){
                arrayOfCharacter+="["+arrayOfDuplicate+"]"
                noOfArrayOfDuplicate++
                arrayOfDuplicate=[]
              }
           }
          else{
            arrayOfCharacter+=arrayOfText[i]
           }
        }
        noOfArrayOfDuplicate
        if(arrayOfDuplicate.length>0){
           arrayOfCharacter+="["+arrayOfDuplicate+"]"
          noOfArrayOfDuplicate++
        }
        return [arrayOfCharacter,noOfArrayOfDuplicate]
      }
    else {
        throw "Please enter a valid string"
      }
}

module.exports = isolateDuplicates;
