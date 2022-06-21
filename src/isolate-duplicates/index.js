function isolateDuplicates(text) {
  if (typeof text !=="string") {
  throw "Please enter a valid string";
  } else { let tempVal = [];
            let commonVal = [];

            let result = [];
            let countDuplicate = 0;
  for (let count = 0; count < text.length; count++) {
  if (  String(text[count]).toUpperCase() ==
      String(text[count + 1]).toUpperCase() ||
      String(text[count]).toUpperCase() ==
      String(text[count - 1]).toUpperCase()) {
        if (tempVal.length < 2) {
            tempVal.push(text[count]);
        if (tempVal.length == 2) {
          result += tempVal[0];
          result += tempVal[1];
        }
        } else if (
            String(text[count]).toUpperCase() !=
            String (text[count - 1]).toUpperCase() &&
            String(text[count]).toUpperCase() ==
            String(text[count + 1]).toUpperCase()
        ) {
        tempVal = [];

        tempVal. push(text[count]);
        } else if (
            String(text[count]).toUpperCase() ==
            String(text[count - 1]).toUpperCase() &&
            String(text[count]).toUpperCase() !=
            String(text[count + 1]).toUpperCase()
        ) {
        commonVal += text[count];
        result += "[" + commonVal + "]";
        countDuplicate++;
        commonVal= "";
        } else {
          commonVal += text[count];
   }
  } else {
    result += text[count];
  }
}
return[result, countDuplicate];
}
}

module.exports = isolateDuplicates;
