function isolateDuplicates(text) {
  if (typeof text !== "string") {
    throw "Please enter a valid string";
  } else {
    let firstArr = [];
    let secondArr = [];
    let result = [];
    let countDuplicate = 0;

    for(let count = 0; count < text.length; count++) {
      if(
        String(text[count]).toUpperCase() ==
          String(text[count + 1]).toUpperCase() ||
        String(text[count]).toUpperCase() ==
          String(text[count - 1]).toUpperCase()
      ) {
        if(firstArr.length < 2) {
          firstArr.push(text[count]);
          if(firstArr.length == 2) {
            result += firstArr[0];
            result += firstArr[1];
          }
        } else if (
          String(text[count]).toUpperCase() !==
            String(text[count - 1]).toUpperCase() &&
          String(text[count]).toUpperCase() ==
            String(text[count + 1]).toUpperCase()
        ) {
          firstArr = [];
          firstArr.push(text[count]);
        } else if (
          String(text[count]).toUpperCase() ==
            String(text[count - 1]).toUpperCase() &&
          String(text[count]).toUpperCase() !==
            String(text[count + 1]).toUpperCase()
        ) {
          secondArr += text[count];
          result += "[" + secondArr + "]";
          countDuplicate++;
          secondArr = "";
        } else {
          secondArr += text[count];
        }
      } else {
        result += text[count];
      }
    }
    return [result, countDuplicate];
  }
}


module.exports = isolateDuplicates;
