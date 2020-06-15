const isolateDuplicates = text => {
  if (typeof text !== 'string') throw Error("Please enter a valid string");
  const mapRepeatedString = text.match(/(.)\1{0,}/gi);
  let result = '';
  let counter = 0;

  mapRepeatedString.map(char => {
    if (char.length > 2) {
      counter++
      const firstTwoChars = char.substr(0, 2);
      const remChars = char.substr(2);
      result += `${firstTwoChars}[${remChars}]`
    } else {
      result += char
    }
  });

  return [result, counter]
};

module.exports = isolateDuplicates;
