function isolateDuplicates(text) {
    if(typeof text==="string"){
        let text1=[...text]
        let arrayOfResult=[]
        let arrayOfCharacter=text[0]+text[1]
        let arrayOfDuplicate=""
        let noOfArrayOfDuplicate=0
        for(var i=2;i<text1.length;i++){
          if(text1[i].toLowerCase()==arrayOfCharacter[arrayOfCharacter.length-1].toLowerCase()&&text1[i].toLowerCase()==arrayOfCharacter[arrayOfCharacter.length-2].toLowerCase()){
              //arrayOfCharacter.push(arrayOfDuplicate)
              arrayOfDuplicate+=text1[i]
              arrayOfDuplicate
             if(i<text1.length-1&&text1[i].toLowerCase()!==text1[i+1].toLowerCase()){
                arrayOfCharacter+="["+arrayOfDuplicate+"]"
                noOfArrayOfDuplicate++
                arrayOfDuplicate=[]
              }
           }
          else{
            arrayOfCharacter+=text1[i]
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
        return "Please enter a valid string"
      }
}

module.exports = isolateDuplicates;
