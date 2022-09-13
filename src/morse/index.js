const MORSE_CODE = {
  "-.-.--": "!",
  ".-..-.": '"',
  "...-..-": "$",
  ".-...": "&",
  ".----.": "'",
  "-.--.": "(",
  "-.--.-": ")",
  ".-.-.": "+",
  "--..--": ",",
  "-....-": "-",
  ".-.-.-": ".",
  "-..-.": "/",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  "..--..": "?",
  ".--.-.": "@",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "..--.-": "_",
  "...---...": "SOS",
};

Object.freeze(MORSE_CODE);

function morse(text) {
//if its not a string throw an error
  if (typeof(text)!= "string"){
    throw "Please provide a morse string";
  }
  //remove leading spaces
  text= text.trim();
  //return empty string as it is
  if (text==""){
    return "";
  }
  //split into words
  text= text.split("   ");
  //split into letters
  text.forEach((elem,index) => text[index] = text[index].trim().split(" "));
  //translate each letter
  for (let i=0; i<text.length; i++){
    text[i].forEach((elem,index) => text[i][index]= text[i][index].replace(text[i][index], MORSE_CODE[text[i][index]]));
  }
  //join into words
  text.forEach((elem, index) => text[index]= text[index].join(""));
  //join into sentence
  return text.join(" ")
}

module.exports = morse;
