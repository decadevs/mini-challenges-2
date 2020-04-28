function isolateDuplicates(text) {

    if (typeof text !== "string" || !text) {
        throw "Please enter a valid string";
    }

    let textArray = text.split("");
    let characterCount = 0;
    let totalDuplicates = 0;
    let character;
    let newArray = [];

    while (textArray.length !== 0) {
        character = textArray[0];
        textArray.shift();

        if ((textArray.length !== 0) && (textArray[0].toLowerCase() === character.toLowerCase())) {
            characterCount += 1;
        } else {
            characterCount = 0;
        }

        if (characterCount === 2) {
            totalDuplicates++;
            newArray.push(character);
            newArray.push('[');

            while ((textArray.length !== 0) && (character.toLowerCase() === textArray[0].toLowerCase())) {
                newArray.push(textArray[0]);
                textArray.shift();
            }

            newArray.push(']');
            characterCount = 0;
        } else {
            newArray.push(character);
        }
    }
    newArray = [newArray.join(''), totalDuplicates];
    console.log(newArray);
    return newArray;
}

module.exports = isolateDuplicates;
