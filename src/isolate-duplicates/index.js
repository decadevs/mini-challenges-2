function isolateDuplicates(text) {

  if (typeof (text) !== "string") {
    throw new Error('Please enter a valid string')
  }

  let finalStr = ''
  let count = 0
  let newText = text.toLowerCase()
  for (let j = 0; j < text.length; j++) {
    finalStr += text[j]

    if (newText[j] === newText[j - 1] && newText[j] === newText[j + 1] && newText[j] !== newText[j - 2]) {
      finalStr += '['
      count += 0.5
    }

    if (newText[j] === newText[j - 1] && newText[j] !== newText[j + 1] && newText[j] === newText[j - 2]) {
      finalStr += ']'
      count += 0.5
    }
  }
  return [finalStr, count]
}

module.exports = isolateDuplicates;
