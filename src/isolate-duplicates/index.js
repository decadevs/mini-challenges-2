function isolateDuplicates(text) {
    if (typeof(text) != 'string') {
        throw new Error('Please enter a valid string');
    }
    else {
        let text1 = text.toLowerCase();
        let isolatedDups = '';
        let duplicates = 0;
        let charDupCount = 0;
        for (let index = 0; index < text.length; index++) {
            if (text1[index] == text1[index + 1]) {
                charDupCount++;
            }
            else {
                if (charDupCount < 2) {
                    let index1 = index - charDupCount;
                    for (index1; index1 < index + 1; index1++) {
                        isolatedDups += text[index1]
                    }
                }
               
                else {
                    duplicates++;
                    let index2 = index - charDupCount;
                    let endPoint2 = index2 + 2;
                    for (index2; index2 < endPoint2; index2++) {
                        isolatedDups += text[index2];
                    }
                    let subArrLength = charDupCount - 1;
                    if (subArrLength) {
                        let subArr = new Array()
                        for(endPoint2; endPoint2 < index + 1; endPoint2++) {
                            subArr.push(text[endPoint2])
                        }
                        isolatedDups += '[' + subArr.join('') + ']'                        
                    }
                }
                charDupCount = 0;
            }
        }

    return [isolatedDups, duplicates]; 
    }
}
module.exports = isolateDuplicates;
