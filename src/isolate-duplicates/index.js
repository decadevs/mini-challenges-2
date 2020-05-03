function isolateDuplicates(input) {
  if (input === undefined) {
    throw '';
  }
  if (typeof (input) != "string") {
    throw "Please enter a valid string";
  }
  let lowerCaseInput = input.toLowerCase().split('');
  let inputArray = input.split('');
  let collector = [];
  let counter = 0;
  for (let i = 0; i < inputArray.length; i++) {
    collector.push(inputArray[i]);
    if (lowerCaseInput[i] === lowerCaseInput[i + 1]) {
      counter++;
    } else {
      if (counter > 1) {
        collector.push(']');
      }
      counter = 0;
    }
    if (counter === 2) {
      collector.push('[');
    }
  }
  let finalString = collector.join('');
  collector = [];
  for (let i = 0; i < finalString.length; i++) {
    if (finalString[i] === '[') {
      counter++;
    }
  }
  collector[0] = finalString;
  collector[1] = counter;
  return collector;
}

module.exports = isolateDuplicates;
