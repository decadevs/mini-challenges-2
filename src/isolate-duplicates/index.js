function isolateDuplicates(text) {
    let counter = 0;
    let newString = "";
    let duplicates = 0;
    for (let i = 0; i < text.length; i++ ) {
        if (i > 0 && text[i].toLowerCase() === text[i - 1].toLowerCase()) counter++;
        if (counter === 2) {
            newString += "[";
            duplicates++;
        }
        if (i > 0 && text[i].toLowerCase() !== text[i - 1].toLowerCase() && counter > 2) {
            counter = 0;
            newString += "]";
        }
        if (i > 0 && text[i].toLowerCase() !== text[i - 1].toLowerCase() && counter > 0) counter = 0;
        newString += text[i];

    }

    newString += counter >= 2 ? "]" : "";
    return [newString, duplicates];
}


// console.log(isolateDuplicates("HelllllooooooDeeeecadevvsss"));
// console.log(isolateDuplicates("HEEEELLLLLOOOOOOOTHHHHHEEEEERRRREEE"));
// console.log(isolateDuplicates("boopdedoop"));
// console.log(isolateDuplicates("TttTTTTttttTTTTTTIIIIIiiiiiiiSSSSSSSSSTTTTAAAAAAAAAaaaaaaaaaSSSSSSSSSSKKKKKkkkkkk"));

module.exports = isolateDuplicates;
