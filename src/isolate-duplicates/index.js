function isolateDuplicates(text) {
  if (typeof text !== "string") {
    throw new Error("Please enter a valid string");
  }

  let finalStr = "";
  let textCount = 0;

  for (let i = 0; i < text.length; i++) {
    let count = 1;

    while (text[i] === text[i +1] && [i + 1] < text.length) {
      count++;
      i++;
    }
    if (count >2) {
      // finalStr += newText[i] + newText[i] + "[" + newText[i].repeat(count - 2) + "]";
      finalStr += text[i].repeat(2) + "[" + text[i].repeat(count - 2) + "]";
      textCount++;
    } else {
      finalStr += text[i].repeat(count);
    }
  }
finalStr
  return [finalStr, textCount];
}
console.log(isolateDuplicates("hellllloooooodeeeecadevvsss"))
   //   "hell[lll]oo[oooo]dee[ee]cadevvss[s]",
   //   4,


module.exports = isolateDuplicates;
