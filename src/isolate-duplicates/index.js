function isolateDuplicates(text) {
    if(arguments.length < 1 || typeof(text) != "string"){
        throw new Error("Please enter a valid string")
      }
    
      let newArr = []
      let multiCount = 0;
      let universalCount = 0;
    
      text = text.split("");
      for(let i = 0; i < text.length; i++){
        newArr.push(text[i])
        if(text[i+1] != undefined && text[i].toLowerCase() == text[i+1].toLowerCase()){
          multiCount++
          if(multiCount == 2){
            newArr.push("[")
            universalCount++
          }
    
        }else if (text[i+1] != undefined && text[i].toLowerCase() !== text[i+1].toLowerCase() || i == text.length - 1){
          if(multiCount > 1 ){
            newArr.push("]")
          }
          multiCount = 0
        }
      }
    
      return[newArr.join(""),universalCount]
}

module.exports = isolateDuplicates;
