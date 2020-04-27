function isolateDuplicates(text) {
  if (typeof(text) !== 'string') {
    throw "Please enter a valid string";
  }

  let result = [];
  let count = 0;
  let alphabet = text[0].toLowerCase();
  let modifiedText = '';
  let numberOfDuplicates = 0;

  for(let i = 0; i < text.length; i++) {
    if (alphabet === text[i].toLowerCase()) {
      count++;
      if (count === 3) {
        modifiedText += '[' + text[i];
        numberOfDuplicates++;
      } else {
        modifiedText += text[i];
      }
    } else if (alphabet !== text[i] && count > 2) {
      alphabet = text[i].toLowerCase();
      count = 1;
      modifiedText += ']' + text[i];
    } else {
      alphabet = text[i].toLowerCase();
      modifiedText += text[i];
      count = 1;
    }
  }

  if (count > 2) {
    modifiedText += ']'
  }

  result.push(modifiedText);
  result.push(numberOfDuplicates);

  return result;
}

module.exports = isolateDuplicates;
// console.log(isolateDuplicates());

