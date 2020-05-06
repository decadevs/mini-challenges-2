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

function morse(text) 
{
  //check to ensure the input text is a valid string
  if(typeof text !== "string" )
  {
      return `Please provide a morse string`;
  }

  //container variable to reference the translated morse code
  let decodeMorse = [];

  //split the input morse code using space character between each morse code
  let splitMorse = text.split(" ");
  
  //loop through each item in the splitMorse array and ensure it's a validate morse string
  for (let item of splitMorse)
  {
      if(item === "")
      {
        decodeMorse.push(" ");//preserve all whitespace character in the input text
      } 
      else if(MORSE_CODE.hasOwnProperty(item))
      {
        decodeMorse.push(MORSE_CODE[item]);
      }
      else
      {
        return `Please provide a morse string`;
      }
  }
  
  //join the array of the decoded morse code to form human readable string
  //remove any whitespace char/s at the beginning or the end.
  let formatDecodeMorse = decodeMorse.join("").trim();

  //replace multiple whitespace chars with single whitespace
  let output = formatDecodeMorse.replace(/\s\s+/g, ' ');  
  
  return output;
}

module.exports = morse;