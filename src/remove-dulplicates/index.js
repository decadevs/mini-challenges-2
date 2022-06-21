function removeDuplicates(obj) {
    const unique = []
    const valSeen = []
    const result = {}
    
    const keys = Object.keys(obj)
        .map(Number)
        .sort((a, b) => b - a);
    
    while (unique.length < keys.length) {
        unique.push([])
    }

    let count = 0;
    for (let arr of keys) {
        const array = obj[arr];

        array.forEach(e => {
            if (!valSeen.includes(e)){
                unique[count].push(e);
                valSeen.push(e)
            }
        })

        count += 1
    }

    for (let i = 0; i < keys.length; i++){
        result[keys[i]] = unique[i]
    }
    return result
}

module.exports = removeDuplicates;
