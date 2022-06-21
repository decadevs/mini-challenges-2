function isolateDuplicates(text) {

  if (typeof text !== "string") {
    throw "Please enter a valid string";
  } else {
    let instantVal = [];
    let generalVal = [];

    let output = [];
    let duplicateCounter = 0;
    for (let count = 0; count < text.length; count++) {
      if (
        String(text[count]).toUpperCase() ==
          String(text[count + 1]).toUpperCase() ||
        String(text[count]).toUpperCase() ==
          String(text[count - 1]).toUpperCase()
      ) {
        if (instantVal.length < 2) {
          instantVal.push(text[count]);
          if (instantVal.length == 2) {
            output += instantVal[0];
            output += instantVal[1];
          }
        } else if (
          String(text[count]).toUpperCase() !=
            String(text[count - 1]).toUpperCase() &&
          String(text[count]).toUpperCase() ==
            String(text[count + 1]).toUpperCase()
        ) {
          instantVal = [];

          instantVal.push(text[count]);
        } else if (
          String(text[count]).toUpperCase() ==
            String(text[count - 1]).toUpperCase() &&
          String(text[count]).toUpperCase() !=
            String(text[count + 1]).toUpperCase()
        ) {
          generalVal += text[count];
          output += "[" + generalVal + "]";
          duplicateCounter++;
          generalVal = "";
        } else {
          generalVal += text[count];
        }
      } else {
        output += text[count];
      }
    }

    return [output, duplicateCounter];
  }
}




module.exports = isolateDuplicates;
