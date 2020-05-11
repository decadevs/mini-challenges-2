function isolateDuplicates(text) {
    let counter = 0;
    let newString = "";
    let duplicates = 0;
    if (typeof text !== "string") throw new TypeError("Please enter a valid string");
    for (let i = 0; i < text.length; i++ ) {
        if (i > 0 && text[i].toLowerCase() === text[i - 1].toLowerCase()) counter++;
        if (i > 0 && text[i].toLowerCase() !== text[i - 1].toLowerCase() && counter >= 2) {
            counter = 0;
            newString += "]";
        }
        if (counter === 2) {
            newString += "[";
            duplicates++;
        }
        if (i > 0 && text[i].toLowerCase() !== text[i - 1].toLowerCase() && counter > 0) counter = 0;

        newString += text[i];

    }

    newString += counter >= 2 ? "]" : "";
    return [newString, duplicates];
}

console.log(isolateDuplicates("helloookat"));

module.exports = isolateDuplicates;
