const isolateDuplicates = text => {
    if (typeof text !== 'string'){
        throw new Error('Please enter a valid string')
    };
    
    let controlArray = [];
    let arrayOfResult = [];
    let counter = 0;
    let arrayOfUpperCasedText = text.toUpperCase().split('');
    text = text.split('');
    for (let i = 0; i < text.length; i++) {
        if(arrayOfUpperCasedText[i] !== arrayOfUpperCasedText[i + 1]) controlArray.push([text[i]]);
    }
    
    const fillHashTable = (array, correlation, juxtaposeCharacter) => {
        let shelterArray = [];
        for (let j = 0; j < array.length; j++) {
            if(correlation[j] !== correlation[j + 1]) break;
            if(correlation[j] === correlation[j+1] && correlation[j] === juxtaposeCharacter.toUpperCase()) {
               shelterArray.push(array[j])
            }
        }
        let last = array[shelterArray.length];
        shelterArray.push(last);
        for (let k = 0; k <= shelterArray.length - 1; k++) {
            array.shift(juxtaposeCharacter);
            correlation.shift(shelterArray[k]);
         }
        return shelterArray;
    }
    
    for (let l = 0; l < controlArray.length; l++){
    controlArray[l] = [...controlArray[l].concat(fillHashTable(text, arrayOfUpperCasedText, controlArray[l][0]))]
    controlArray[l].splice(0, 1);
    if(controlArray[l].length > 2){
        controlArray[l].splice(controlArray[l].length, 0, ']');
        controlArray[l].splice(2, 0, '[');
        counter++

    }
        arrayOfResult = arrayOfResult.concat(controlArray[l]);
    }
    return [arrayOfResult.join(''), counter];

}


module.exports = isolateDuplicates;
