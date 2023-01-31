function isolateDuplicates(text) {
    if (typeof text !== 'string') {
        throw new Error('Please enter a valid string')
    }
    let lowerText = text.toLowerCase()
    let newString = ""    let count = 0    for (let i = 0; i < text.length; i++) {
        newString += text[i]
        if (lowerText[i] === lowerText[i - 1] && lowerText[i] === lowerText[i + 1] && lowerText[i] !== lowerText[i - 2]) {
            newString += '['            count++        }
        if (lowerText[i] === lowerText[i - 1] && lowerText[i] !== lowerText[i + 1] && lowerText[i] === lowerText[i - 2] ) {
            newString += ']'        }
    }
    return [newString, count]
}
console.log(isolateDuplicates("aaAabbcdefffffffg"))


module.exports = isolateDuplicates;
