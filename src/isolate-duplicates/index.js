function isolateDuplicates(text) {
    if (typeof text !== "string")
        throw ("Please enter a valid string");

    var copy = "";
    let dupCount = 0, count = 1, open = false, last = "";
    for (const letter of text) {
        if (last === letter.toLowerCase()){
            count += 1;
            if(count > 2 && !open){
                copy += "[";
                open = true;
                dupCount += 1;
            }
            copy += letter;
        }else{
            last = letter.toLowerCase();
            if (open) copy += "]";
            copy += letter;
            count = 1;
            open = false;
        }
    }
    if (open) copy += "]";
    return [copy, dupCount];
    
}

module.exports = isolateDuplicates;
