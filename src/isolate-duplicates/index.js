function isolateDuplicates(text) {
  if (arguments.length < 1 || typeof(text) != 'string') {
    throw 'Please enter a valid string'
  }

  let alphabets = [];
  let duplicateCount = 0;
  let count = 0;
  text = text.split('')

  for (let i = 0; i < text.length; i++) {
    alphabets.push(text[i]);
    if (text[i + 1] != undefined && text[i].toLowerCase() == text[i + 1].toLowerCase()) {
      duplicateCount++
      if (duplicateCount == 2) {
        alphabets.push('[')
        count++;
      }
    } else if (text[i + 1] != undefined && text[i].toLowerCase() !== text[i + 1].toLowerCase() || i == text.length - 1) {
      if (duplicateCount > 1) {
        alphabets.push(']')
      }
      duplicateCount = 0;
    }
  }
  return [alphabets.join(''), count]

}

module.exports = isolateDuplicates;

// for (let alpha of text) {
//   if(!alphabets.includes(alpha)) {
//     alphabets.push(alpha);
//   } else {
//     duplicate.push(alpha);
//   }
// }
// return duplicate;
