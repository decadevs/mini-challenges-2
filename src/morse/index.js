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
  if (typeof(text) !== "string") throw Error ("Please provide a morse string")
  if ("") return "";
  let result=[]
let textArr= text.trim().split('   ')
console.log(textArr)
let elemChar =''
textArr.forEach((element, index, array) => {
  console.log(array)
  console.log(element)
  elemChar=element.split(' ')
  console.log(elemChar)
for (let i=0; i<elemChar.length;i++){
  console.log(elemChar[i])
  result.push(MORSE_CODE[elemChar[i]])
  if (i === elemChar.length - 1 && index !== array.length - 1) result.push(" ");

  }
});
console.log(result.join(''))
return result.join('')

}
console.log(morse(" . "))

module.exports = morse;
