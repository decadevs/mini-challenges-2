function isolateDuplicates(text) {
    if (typeof text != "string" || text == null)
    throw "Please enter a valid string";

  let isolatedDupStr = "";
  let consecutiveStr = text[0];
  let noOfDuplicate = 0;
  for (let i = 1; i < text.length; i++) {
    if (
      text[i].toLowerCase() == consecutiveStr[consecutiveStr.length - 1].toLowerCase()
    ) {
      consecutiveStr += text[i];
    } else {
      if (consecutiveStr.length > 2) {
        isolatedDupStr +=
          consecutiveStr.substring(0, 2) + "[" + consecutiveStr.substring(2) + "]";
        noOfDuplicate++;
      } else isolatedDupStr += consecutiveStr;
      consecutiveStr = text[i];
    }
  }
  if (consecutiveStr.length > 2) {
    isolatedDupStr +=
      consecutiveStr.substring(0, 2) + "[" + consecutiveStr.substring(2) + "]";
    noOfDuplicate++;
  } else isolatedDupStr += consecutiveStr;
  return [isolatedDupStr, noOfDuplicate];

}

module.exports = isolateDuplicates;
