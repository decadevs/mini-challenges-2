function isolateDuplicates(text) {
    if (typeof text !=="string") {
    throw "Please enter a valid string";
    } else {
    let array1 = [];
    let array2 = [];
    let resultArr = [];
    let counter = 0;

    for (let i = 0; i < text.length; i++) {
    if (String(text[i]).toUpperCase() == String(text[i + 1]).toUpperCase() ||
     String(text[i]).toUpperCase() == String(text[i - 1]).toUpperCase()) {
    if (array1.length < 2) {
    array1.push(text[i]);
    if (array1.length == 2) {
    resultArr += array1[0];
    resultArr += array1[1];
    }
    } else if (String(text[i]).toUpperCase() != String (text[i - 1]).toUpperCase() &&
    String(text[i]).toUpperCase() == String(text[i + 1]).toUpperCase()) {
    array1 = [];
    array1. push(text[i]);
     }
     else if (String(text[i]).toUpperCase() == String(text[i - 1]).toUpperCase() &&
    String(text[i]).toUpperCase() != String(text[i + 1]).toUpperCase()) {
    array2 += text[i];
    resultArr += "[" + array2 + "]";
    counter++;
    array2= "";
     } else {
      array2 += text[i];
     }
    } else {
      resultArr += text[i];
    }
  }
  return[resultArr, counter];
}
}

module.exports = isolateDuplicates;

