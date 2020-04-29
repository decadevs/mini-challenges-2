function isolateDuplicates(text) {
  if (typeof(text) != 'string') {
    throw "Please enter a valid string";
  }
  let strArray = text.toLowerCase().split("");
  let count = 0;
  let groupArr = [];
  let ans = "";

  for (let i = 0; i < strArray.length; i += 1) {
    groupArr.push(strArray[i]);
    if (strArray[i] == strArray[i + 1]) {
      if (groupArr.length < 2) {
        ans += text[i];
      } else if (groupArr.length == 2) {
        ans += `${text[i]}[`;
        count += 1;
      } else if (groupArr.length > 2) {
        ans += text[i];
      }
    } else if (strArray[i] != strArray[i + 1]) {
      if (groupArr.length < 3) {
        ans += text[i];
        groupArr = [];
      } else if (groupArr.length > 2) {
        ans += `${text[i]}]`;
        groupArr = [];
      }
    }
  }
  return [ans, count];
}

module.exports = isolateDuplicates;
