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
  if (typeof(text) != 'string') {
    throw new Error("Please provide a morse string");
  }
  if (text == "" ) return ""
  
  let result = ""
  let result1 = ""

  text = text.trim()

  if (text.includes('   ')) {
    text = text.replace(/   /g, '[[]]')
    text
    // text = text.replace(/ /g, '')
    text = text.split('[[]]')
    console.log(text.length);
    for (let i = 0; i < text.length; i++) {
      let text1 = text[i].split(' ')
      console.log(text1);
      result = ""
      for (let j=0; j<text1.length; j++) {
        if (text1[j] == "") continue
        result += MORSE_CODE[text1[j]]
      }
      result

      if (i == text.length - 1) {
        result1 += result
      } else {
        result1 += result + ' '
      }
    }
    result1
    
    return result1.trim()

  } else {
   text = text.trim()

    if (text[text.length - 1] == ' '){
      text = text.replace(' ', '')
    }
    text = text.split(' ')

    text

    for (let i = 0; i < text.length; i++) {
      result += MORSE_CODE[text[i]]
    }
    return result
  }
}

console.log(morse("      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-     "));
module.exports = morse;
