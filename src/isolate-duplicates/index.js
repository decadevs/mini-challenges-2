function isolateDuplicates(text) {
  if (typeof text !== "string") {
    throw "Please enter a valid string";
  }

  let duplicates = text.match(/(.)\1{0,}/gi); //use a regex to match the characters
  let outcome = "";
  let count = 0;
  for (let i = 0; i < duplicates.length; i++) {
    let text = duplicates[i];
    if (text.length > 2) {
      count++;
      outcome += `${text.slice(0, 2)}[${text.slice(2)}]`;
    } else {
      outcome += text;
    }
  }

  return [outcome, count];



}

module.exports = isolateDuplicates;
