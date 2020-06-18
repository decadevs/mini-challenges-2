function isolateDuplicates(text) {
  if (typeof (text) !== 'string')
    throw Error("Please enter a valid string");

  let letterCount = 1;
  let arrayCount = 0;
  let answer = []
  const textArr = text.split('');
  const textArrCopy = text.toLowerCase().split('');

  for (let i = 0; i < textArr.length; i++) {
    if (textArrCopy[i] === textArrCopy[i + 1]) {

      letterCount++;
      answer.push(textArr[i])
      if (letterCount === 3) answer.push('[')

    } else {

      answer.push(textArr[i]);
      if (letterCount > 2) {
        answer.push(']')
        arrayCount++;
        
      }
      letterCount = 1;
    }
  }
  return [answer.join(''), arrayCount];
}


console.log(isolateDuplicates('aaaabbcdefffffffg'));

module.exports = isolateDuplicates;
