const isolateDuplicates = text => {
    if (typeof text !== 'string'){
        throw new Error('Please enter a valid string')
    };
    const keeperArr = [];
    let result = [];
    let counter = 0;
    const caseInsensitive = text.toUpperCase().split('');
    text = text.split('');
    for (let index = 0; index < text.length; ++index) {
        if(caseInsensitive[index] !== caseInsensitive[index + 1]) keeperArr.push([text[index]]);
    }
    const updateHashMap = (array, comparison, compareCha) => {
        let container = [];
        for (let i = 0; i<array.length; ++i) {
            if(comparison[i] !== comparison[i + 1]) break;
            if(comparison[i] === comparison[i+1] && comparison[i] === compareCha.toUpperCase()) {
               container.push(array[i])
            }
        }
        let last = array[container.length];
        container.push(last);
        for (let j = 0; j <= container.length - 1; ++j) {
            array.shift(compareCha);
            comparison.shift(container[j]);
         }
        return container;
    }
for (let i = 0; i<keeperArr.length; ++i){
 keeperArr[i] = [...keeperArr[i].concat(updateHashMap(text,caseInsensitive, keeperArr[i][0]))]
 keeperArr[i].splice(0, 1);
if(keeperArr[i].length > 2){
    keeperArr[i].splice(keeperArr[i].length, 0, ']');
    keeperArr[i].splice(2, 0, '[');
    counter++

}
    result = result.concat(keeperArr[i]);
}
return [result.join(''), counter];

}

module.exports = isolateDuplicates;
