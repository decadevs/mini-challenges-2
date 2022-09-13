function isolateDuplicates(text) {
  if (arguments.length < 1 || typeof(text) != "string") {
    throw "Please enter a valid string"
  }
  let newArr = [];
  let dupliCount = 0;
  let totalCount = 0;
  text = text.split("");
  for (let i = 0; i < text.length; i++) {
    newArr.push(text[i]);
    if (text[i+1] != undefined && text[i].toLowerCase() == text[i+1].toLowerCase()) {
      dupliCount++;
      if (dupliCount == 2) {
        newArr.push('[')
        totalCount++;
      } 
    }else if (text[i+1] != undefined && text[i].toLowerCase() !== text[i+1].toLowerCase() || i == text.length-1) {
        if (dupliCount > 1) {
          newArr.push(']')
        }
        dupliCount = 0
      }
    }
    return [newArr.join(''), totalCount];
  }
  



module.exports = isolateDuplicates;
