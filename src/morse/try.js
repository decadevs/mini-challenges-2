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
function morse(text) {
  // let textArr = text.split(' ');textArr
  


  let spaceCord
  let splitWord
  let textCopy = text.slice(); textCopy
  let splitWordArr = []
  // let decodedLetterArr = []
  let decodedArr = []
  let singleSpacedCharacters = []

  // "...-..- ..... .-.-.- ----- --...   .--. . .-.    -... --- - - .-.. ."

  if(textCopy.indexOf('   ')>=0){
    // spaceCord = textCopy.indexOf('   ');spaceCord
    splitWord = textCopy.split('  '); splitWord

    for (char in splitWord) {
      if(splitWord[char] == "") splitWord.splice(char, 1)
    }
    console.log(splitWord.indexOf(''));

    for(let i=0; i <splitWord.length; i++){
      splitWordArr.push(splitWord[i].split(' '));
    }

    console.log(splitWordArr);

      for (let i = 0; i < splitWordArr.length; i++){
      console.log(splitWordArr[i]);
        for (let j = 0; j < splitWord[i].length; j++){
          console.log(splitWordArr[i][j]);

          if(splitWordArr[i][j]!=='') {
            singleSpacedCharacters.push(MORSE_CODE[splitWordArr[i][j]]); singleSpacedCharacters
          }
          decodedArr.push(singleSpacedCharacters);decodedArr
        }
      }






    console.log(decodedArr.join(''))


    //   splitWord[i]=splitWord[i].split(' ');
    //   // console.log(splitWord[i);

    //   for(let char of splitWord[i]){
    //    singleSpacedCharacters = char.split(' ');singleSpacedCharacters
    //   for(let letter of singleSpacedCharacters){
    //     decodedArr.push(MORSE_CODE[letter]);decodedArr

    //   }
    // }
    // }


    // for(let i=0; i < splitWord.length; i++){
    //   console.log(splitWord[i] = splitWord[i].split(' '));
    //   splitWordArr.push(splitWord[i]); splitWordArr
      // for (char of splitWord[i]) {
      //   decodedArr.push(MORSE_CODE[char]);decodedArr

      // }
    // }
    // console.log(splitWord[0] = splitWord[0].split(' '));
    // for(char of splitWord[0]){
    //   decodedArr.push(MORSE_CODE[char]);

    // }
    // console.log(decodedArr.join(''));

  }


}

console.log(morse(".-   -...   -.-. "))
  // "...-..- ..... .-.-.- ----- --...   .--. . .-.    -... --- - - .-.. .")); //should return "$5.07 PER BOTTLE"

*/