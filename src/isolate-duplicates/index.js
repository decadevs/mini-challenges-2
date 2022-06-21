function isolateDuplicates(text) {
  if(arguments.length <1 || typeof(text) != "string"){
    throw "Please enter a valid string"
  }

  let dupArr = []
  let multiCount = 0;
  let generalCount = 0;

  text = text.split("");
  for(let i=0; i < text.length; i++){
    dupArr.push(text[i])
    if(text[i+1] != undefined && text[i].toLowerCase() == text[i+1].toLowerCase()){
        multiCount++
      if(multiCount == 2){
        dupArr.push('[')
        generalCount++
      }

    } else if (text[i+1]!=undefined && text[i].toLowerCase()!== text[i+1].toLowerCase() || i == text.length-1){
      if(multiCount > 1){
        dupArr.push(']')
      }
      multiCount = 0
    }
  }

  return[dupArr.join(""),generalCount]
}

module.exports = isolateDuplicates;
