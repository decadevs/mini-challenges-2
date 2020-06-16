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
  if(text === null || typeof text !== "string") {
    throw TypeError("Please provide a morse string");
  }

  if(text === undefined || /\d+|\w+/g.test(text) ) {
    throw Error("Please provide a morse string");
  }

  // text.split("").forEach(item => {
  //   if(item !== '.' || item !== "-" || item !== " " ) {
  //     throw Error("Please provide a morse string");
  //   }
  // });

  text = text.trim();
  let moroseArr = text.split(" ");
  let translated = "";
  for(let i = 0; i < moroseArr.length; i++){
    if(moroseArr[i] === "" && moroseArr[i+1] === "" &&
       moroseArr[i+2] === "" ){
       continue;
    }
    if(moroseArr[i] === "" && moroseArr[i+1] === ""){
        translated += " ";
        continue;
    }
    if(MORSE_CODE[moroseArr[i]] !== undefined){
    translated += MORSE_CODE[moroseArr[i]];
    }
}

return translated;
}

module.exports = morse;
