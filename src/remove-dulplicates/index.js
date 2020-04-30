const removeDuplicates = obj => {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; ++i) {
        keys[i] = parseInt(keys[i]);
    }
    keys.sort((a,b) => a - b);
    for(let index = 0; index < keys.length; ++ index) {
        keys[index] = keys[index].toString();
    };
    for (let key of keys) {
        
    }
}

module.exports = removeDuplicates;
