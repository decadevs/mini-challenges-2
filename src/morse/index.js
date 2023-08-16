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
function morse(code) {
  if(code === ""){
    return ""

  }
  if(code === undefined) {
  throw Error ()
  }
  if(code.length === 0){
    throw Error("Please provide a morse string")
  }
  let result = []
  let arr = code.split(" ")
  
  for(let i = 0; i< arr.length; i++){
    result.push(MORSE_CODE[arr[i]])
  }
  let output = result
  for(let i = 0; i <output.length; i++){
      if(output[i] === undefined && output[i+1] === undefined){
          output.splice(i,1)
           output[i] =" "
      }else if(output[i] === undefined){
          output[i] =""
      }else{
          output[i] = output[i]
      }
    
  }

return output.join("").trim()
 
}

module.exports = morse;
