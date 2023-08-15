function isolateDuplicates(text) {
    if (typeof text !== 'string') {
        throw new Error("Please enter a valid string");  // Create an Error object with the message
    }
    
    let duplicate = {};
    let newString = "";
    let str = "";
    let count = 0;
    let stringCount = [];
    let textNew = text.toLowerCase();


    for (let i = 0; i < textNew.length; i++) {
        if (newString !== textNew[i]) {
            if (duplicate[newString] > 2) {
                str += ']';
            }
            duplicate[newString] = 0;
            newString = textNew[i];
        }

        if (!duplicate[textNew[i]]) {
            duplicate[textNew[i]] = 1;
        } else if (duplicate[textNew[i]] === 1) {
            duplicate[textNew[i]]++;
        } else if (duplicate[textNew[i]] === 2) {
            str += '[';
            duplicate[textNew[i]]++;
            count++;
        }

        str += text[i];
    }

    if (duplicate[newString] > 2) {
        str += ']';
    }

    stringCount.push(str);
    stringCount.push(count);

    return stringCount;  // Return the updated stringCount array
}
module.exports = isolateDuplicates;
