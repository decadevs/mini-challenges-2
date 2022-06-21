function isolateDuplicates(text) {
  if (typeof text !== 'string') {
    throw new Error ("Please enter a valid string") //Checks for valid input
  }

  let strArr = [...text];
  let len = strArr.length;
  let txt = text[0] + text[1];
  let duplicates = "";
  let count = 0;

  //Putting duplicates i
  for (let i = 2; i < len; i++) {
    if (strArr[i].toUpperCase() == txt[txt.length - 1].toUpperCase() &&
        strArr[i].toUpperCase() == txt[txt.length - 2].toUpperCase()) {
      duplicates += strArr[i];

      if (i < len - 1 && strArr[i].toUpperCase() !== strArr[i+1].toUpperCase()) {
        txt += "["+duplicates+"]";
        count++;
        duplicates = [];
      }
    } else {
        txt += strArr[i];
    }
  }
  if (duplicates.length > 0) {
    txt += "["+duplicates+"]";
    count++;
  }
  return [txt, count];
}


/*console.log(isolateDuplicates("aaaabbcdefffffffg"));
console.log(isolateDuplicates("hellllloooooodeeeecadevvsss"));*/
module.exports = isolateDuplicates;
