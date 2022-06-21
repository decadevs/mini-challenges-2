function isolateDuplicates(text) {
  if (arguments.length < 1 || typeof text != "string") {
    throw "Please enter a valid string";
  }
  let newcontainer = [];
  let Duplicates = 0;
  let totalCount = 0;
  text = text.split("");

  for (let i = 0; i < text.length; i++) {
    newcontainer.push(text[i]);
    if (
      text[i + 1] != undefined &&
      text[i].toLowerCase() == text[i + 1].toLowerCase()
    ) {
     Duplicates++;
      if ( Duplicates == 2) {
        newcontainer.push("[");
        totalCount++;
      }
    } else if (
      (text[i + 1] != undefined &&
        text[i].toLowerCase() !== text[i + 1].toLowerCase()) ||
      i == text.length - 1
    ) {
      if ( Duplicates > 1) {
        newcontainer.push("]");
      }
     Duplicates = 0;
    }
  }

  return [newcontainer.join(""), totalCount];
}

module.exports = isolateDuplicates;
