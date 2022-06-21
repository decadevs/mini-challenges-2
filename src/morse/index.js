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

  // const newStr = text.split('/(\s+)/');
  const newStr = text;//returns an array
  const result = [];

  /*newStr.forEach(el => {
    for (const ob in MORSE_CODE) {
      if (el == ob) {
        // if(el == ''){
        //   result.push()
        // }
        // console.log(el)
        result.push(MORSE_CODE[el]);
      }
    }

    // console.log(el)
  });*/
  let str = ''

  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      str += " "
    }
    str += text[i]
    console.log(text[i])

  }
  console.log(str)


  // console.log(newStr)

  // console.log(result.join(''))
  return result.join('')
}

module.exports = morse;

// morse('... ---  ...')
