function isolateDuplicates(text) {

  if (typeof (text) !== "string") {
    return 'Please enter a valid string'
  }

  let alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let finalStr = ''
  let count = 0
  let countObj = _.countBy(text)
  let keysArr = Object.keys(countObj)
  let valuesArr = Object.values(countObj)
  for (let j = 0; j < text.length; j++) {
    let m = j
    if (text[m] === text[j] && text.lastIndexOf(text[j]) - text.indexOf(text[j]) > 1) {
      finalStr += text[j]
      if (j - text.indexOf(text[j]) == 1) {
        finalStr += '['
      }
      if (j === text.lastIndexOf(text[j])) {
        finalStr += ']'
        }
    } else {
        finalStr += text[j]
    }
  }

  for (let index = 0; index < keysArr.length; index++) {
    if (valuesArr[index] > 2) {
      count++
    }
  }
  return [finalStr, count]
}
console.log(isolateDuplicates("aaaabbcdefffffffg"))
console.log(isolateDuplicates("hellllloooooodeeeecadevvsss"))
module.exports = isolateDuplicates;
