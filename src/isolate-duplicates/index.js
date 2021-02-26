function isolateDuplicates(text) {
    
    if (typeof(text)!= 'string') throw 'Please enter a valid string';
    
    let countDuplicates = 0;
    const trackDuplicates = {};
    const arr = [];

    for (let i=0; i < text.length; i++) {
        if (i != 0) {
            if (text[i-1].toLowerCase() != text[i].toLowerCase()) {
                if (trackDuplicates[text[i-1].toLowerCase()]['alphaCount']>2) {
                    arr.push("]");
                }
                trackDuplicates[text[i-1].toLowerCase()]['alphaCount'] = 0;
            }
        }

        if (!trackDuplicates.hasOwnProperty(text[i].toLowerCase())) {
            trackDuplicates[text[i].toLowerCase()] = {'alphaCount': 1};
            arr.push(text[i]);
        } else {
            if (trackDuplicates[text[i].toLowerCase()]['alphaCount'] == 2) {
                countDuplicates += 1;
                arr.push('[');
            }
            arr.push(text[i]);
            trackDuplicates[text[i].toLowerCase()]['alphaCount'] += 1;
        }
    }

    if (trackDuplicates[text[text.length-1].toLowerCase()]['alphaCount'] > 2 ) {
        arr.push(']');
    }

    return [arr.join(""), countDuplicates];
}

module.exports = isolateDuplicates;
