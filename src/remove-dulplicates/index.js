function removeDuplicates(obj) {
    let result = {}, hasAppeared = {};
    let keys = Object.keys(obj), values = [];
    keys = keys.sort((a, b) => b - a);
    for (let i = 0; i < keys.length; i++) {
        values.push(obj[keys[i]])
    }
    for (let i = 0; i < keys.length; i++) {
        let resArr = []
        for (let j = 0; j < values[i].length; j++) {
            if (hasAppeared[values[i][j]] !== true) {
                hasAppeared[values[i][j]] = true;
                resArr.push(values[i][j])
            }
        }
        result[keys[i]] = resArr;
    }
    
    return result;
}

module.exports = removeDuplicates;


