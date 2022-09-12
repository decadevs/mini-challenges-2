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
  // note words are seperated with three spaces
  let trimedCode = text;
  let sections = trimedCode.split("   ");
  let leters = sections.map((data) => {
    return data.split(" ")
  });
let convert = []
  leters.map((data) => {
    convert.push(data.map((char) => MORSE_CODE[char]?MORSE_CODE[char]:''));
  });


  let fulword = "";

  convert.forEach((element) => {
    let word = "";
    for (let i = 0; i < element.length; i++) {
      let char = element[i];
      word += char;
    }
    fulword += word + " ";
  });
  return fulword;

}

console.log(morse("...-..- ..... .-.-.- ----- --...   .--. . .-.    -... --- - - .-.. ."))