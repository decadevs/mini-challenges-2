function isolateDuplicates(text) {
    if (typeof(text) === 'string') {
        let array = [...text];
        let object = array.reduce((obj, item) => {
            if(!obj[item]) {
                obj[item] = 0;
            }
            obj[item]++;
            return obj;
        }, {});
        
        let count = 0;
        let newText = array.join('');
        for (item in object) {
            if (object[item] > 2) {
                count++;
            }
        }
            return [newText, count];
    } else {
        return 'please enter a valid string';
    }
}

module.exports = isolateDuplicates;