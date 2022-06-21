function isolateDuplicates(text) {
  let result = [];
  let duplicateCount = 0;
  let totalCount = 0;
  text = text.split('');

  for (let i = 0; i < text.length; i++) {
    result.push(text[i])

    if (text[i + 1] != undefined && text[i].toLowerCase() == text[i + 1].toLowerCase()) {
      duplicateCount++;
      if(duplicateCount == 2){
        result.push('[')
        totalCount++;
      }

    } else if (text[i + 1] != undefined && text[i].toLowerCase() !== text[i + 1].toLowerCase() || i == text.length - 1) {
      if (duplicateCount > 1){
        result.push(']')
      }
      duplicateCount = 0;
    }
  }

  return [result.join(''), totalCount]
}


console.log(isolateDuplicates("aaaabbcdefffffffg"))
module.exports = isolateDuplicates;
