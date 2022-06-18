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
  if (typeof text !== "string")
  {
    throw 'Please provide a morse string';
  }
  if (text.length === 0)
  {
    return '';
  }

  const validForms = Object.keys(MORSE_CODE);
  let message = [];
  let words = text.trim().split('   ');
  for (let word of words)
  {
    let chars = word.trim().split(' ');
    let messagePart = '';
    for (c of chars)
    {
      if (validForms.includes(c))
      {
        messagePart += MORSE_CODE[c];
      }
      else
      {
        throw 'Please provide a morse string';
      }
    }
    message.push(messagePart);
  }
  return message.join(' ');
}

module.exports = morse;
