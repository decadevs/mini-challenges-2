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
  //if empty parameter or empty array
  if(text === undefined || text.length === 0 && text !== "")
  {
      return `Please provide a morse string`;
  }

  //container variable to reference the translated morse code
  let decodeMorse = [];

  //split the input morse code using space character between each morse code
  let splitMorse = text.split(" ");

  /*use the below forEach loop to perform the decoding of each morse code using
  * the MORSE_CODE object and store the result in the decodeMorse variable array */
  splitMorse.forEach(function(item)
	{
		if(item === "")
		{
			decodeMorse.push(" ");//preserve all whitespace character in the input text
		} 
		else
		{
			decodeMorse.push(MORSE_CODE[item]);
		}
	});

  //join the array of the decoded morse code to form human readable string
  //remove any whitespace character/s at the beginning or the end.
  return decodeMorse.join("").trim();
}

module.exports = morse;
