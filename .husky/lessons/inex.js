// ## Morse

// The Morse code encodes every character as a sequence of "dots" and "dashes".

// For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−.

// The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words.

// For example, the message `Decadev` in Morse code is -.. . -.-. .- -.. . ...-

// NOTE: Extra spaces before or after the code have no meaning and should be ignored. In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.
// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// For example.

// ```js
// decodeMorse("-.. . -.-. .- -.. . ...-");
// //should return "DECADEV"
// ```

// Use the constant `MORSE_CODE` below to translate.

// ```js

// const morseCode = {
//   "-.-.--": "!",
//   ".-..-.": '"',
//   "...-..-": "$",
//   ".-...": "&",
//   ".----.": "'",
//   "-.--.": "(",
//   "-.--.-": ")",
//   ".-.-.": "+",
//   "--..--": ",",
//   "-....-": "-",
//   ".-.-.-": ".",
//   "-..-.": "/",
//   "-----": "0",
//   ".----": "1",
//   "..---": "2",
//   "...--": "3",
//   "....-": "4",
//   ".....": "5",
//   "-....": "6",
//   "--...": "7",
//   "---..": "8",
//   "----.": "9",
//   "---...": ":",
//   "-.-.-.": ";",
//   "-...-": "=",
//   "..--..": "?",
//   ".--.-.": "@",
//   ".-": "A",
//   "-...": "B",
//   "-.-.": "C",
//   "-..": "D",
//   ".": "E",
//   "..-.": "F",
//   "--.": "G",
//   "....": "H",
//   "..": "I",
//   ".---": "J",
//   "-.-": "K",
//   ".-..": "L",
//   "--": "M",
//   "-.": "N",
//   "---": "O",
//   ".--.": "P",
//   "--.-": "Q",
//   ".-.": "R",
//   "...": "S",
//   "-": "T",
//   "..-": "U",
//   "...-": "V",
//   ".--": "W",
//   "-..-": "X",
//   "-.--": "Y",
//   "--..": "Z",
//   "..--.-": "_",
//   "...---...": "SOS",
// };


// function morse (string)  {

//   let newCode = morseCode.trim()
//   console.log(newCode)


  // let a = "phil"
  // let b = "grace"
  // let c = "favour"

  // console.log(`my name is ${a.charAt()} ${b}`) 


var musicians = 0;


if (musicians <= 0) {
  console.log("not a group");
} else if (musicians === 1) {
  console.log("solo");
} else if (musicians === 2) {
  console.log("duet");
} else if (musicians === 3) {
  console.log("trio");
} else if (musicians === 4) {
  console.log("quartet");
} else if (musicians >= 5) {
  console.log("this is a large group");
}

console.log(musicians === 3)
  
  
//   for (let i = 0; i < string.length; i++) {
//     let code = "";
//     if (morseCode[x] === Object.values(morseCode)) {
//       return true;
//     } else {
//       return false
//     }
  








  
// }
// console.log(morse[".."])
// // let newMorse =  Object.values(morseCode);
// console.log(newMorse)
