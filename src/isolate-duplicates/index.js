function isolateDuplicates(text) {
    if(typeof text !== 'string'){
        return 'Please enter a valid string';
            let result = [];
                newArr = str.split('');
            for(let i = 0; i < newArr.length; i++){
                if(result.indexOf(newArr[i]) === -1 && newArr[i] !== ''){
                        result.push(newArr[i]);
                }
            }
            return result.join('')
        }
}

console.log(isolateDuplicates('aaaabbccdd'));
module.exports = isolateDuplicates;
