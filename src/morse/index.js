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

/* 
Pseudocode
  - start with edge cases: 
    - if there is nothing in the text then it should return an empty string
    - if there is an invalid data return "Please provide a morse string"
  - create an empty str to hold the final output
  - split the text by 3 spaces to get each word in the text i.e textSplit
  - loop through the split text 
  - split textSplit again but this time split by 1 space to get each character code i.e splitTextSplit
    - this should return an array of the words inside an array  ==> [[],[]]
  - then loop through splitTextSplit
  - concat the corresponding character code value from the object into the empty string holding the final output
  - the other necessary if statements: 
    - if each loop has reached the end of the word add a space i.e the length of the word -1 is equal to the index of the loop
*/

function morse(text) {
    console.log(typeof text === "string");
    if (typeof text !== "string") {
        throw new Error("Please provide a morse string");
    }
    if (text === "") {
        return "";
    }
    if (text.length === 1) {
        //console.log(MORSE_CODE[text[0]]);
        return MORSE_CODE[text[0]];
    }
    let finalStr = '';
    let textSplit = text.trim().split('   ')

    for (let i = 0; i < textSplit.length; i++) {
        let currentCode = textSplit[i];
        const splitTextSplit = currentCode.split(' ');
        for (let j = 0; j < splitTextSplit.length; j++) {
            const characterCode = splitTextSplit[j];
            finalStr += MORSE_CODE[characterCode];

            if (splitTextSplit.length - 1 === j) {
                finalStr += ' ';
            }
        }
    }
    return finalStr.trim().replace(/undefined/g, '');
}

module.exports = morse;