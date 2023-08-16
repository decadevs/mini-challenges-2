function isolateDuplicates(text) {
    let text = " ";
    if (typeof text !== String) {
        return "Please enter a valid string";
    }
    
    let individualLetters = {};
    let result = [];
    let currentString = "";
    let duplicatedLetterCount = 0;

    for (let i = 0; i < text.length; i++){
        let letter = text[i];
        let allLetters = isAllLetters(letter);


        if (allLetters) {
            if (letter in individualLetters) {
                individualLetters[letter]++;
            } else {
                individualLetters[letter] = 1;
            }

            if (individualLetters[letter] > 2) {
                if (individualLetters[letter] === 3) {
                    result.push(currentString);
                    currentString = "[" + letter + letter;
                    duplicatedLetterCount++;
                }else {
                    currentString += letter;
                }
            }else {
                currentString += letter;
            } 
        }
        else {
            if (currentString.length > 0) {
                result.push(currentString);
                currentString = " ";
            }
            result.push(letter);
        }
                 
    }
    if (currentString.length > 0) {
        result.push(currentString);
    
    }

            return [result. join(''), duplicatedLetterCount];
}

module.exports = isolateDuplicates;
