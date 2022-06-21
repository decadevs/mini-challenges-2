function isolateDuplicates(text) {
  if (typeof text !== "string") {
    throw "Please enter a valid string";
  } else {
    let arr = [];
    let newArr = [];

    let result = [];
    let duplicateCounter = 0;
    for (let count = 0; count < text.length; count++) {
      if (String(text[count]).toUpperCase() == String(text[count + 1]).toUpperCase() ||
        String(text[count]).toUpperCase() == String(text[count - 1]).toUpperCase()
      ) {
        if (arr.length < 2) {
          arr.push(text[count]);
          if (arr.length == 2) {
            result += arr[0];
            result += arr[1];
          }
        } else if (
          String(text[count]).toUpperCase() !=
            String(text[count - 1]).toUpperCase() &&
          String(text[count]).toUpperCase() ==
            String(text[count + 1]).toUpperCase()
        ) {
          arr = [];

          arr.push(text[count]);
        } else if (
          String(text[count]).toUpperCase() ==
            String(text[count - 1]).toUpperCase() &&
          String(text[count]).toUpperCase() !=
            String(text[count + 1]).toUpperCase()
        ) {
          newArr += text[count];
          result += "[" + newArr + "]";
          duplicateCounter++;
          newArr = "";
        } else {
          newArr += text[count];
        }
      } else {
        result += text[count];
      }
    }

    return [result, duplicateCounter];
  }
}

module.exports = isolateDuplicates;
