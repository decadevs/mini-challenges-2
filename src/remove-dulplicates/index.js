function removeDuplicates(obj) {

    const keys = Object.keys(obj);
    let result = {};
    let compare = [];
    console.log(keys)
    for (let i=keys.length-1;i>=0; i--) {
        let response = [];
        let value = obj[keys[i]]
        for(j=0; j<value.length;j++){
            if(!compare.includes(value[j])) {
                compare.push(value[j])
                response.push(value[j]);
            }
        }
        result[keys[i]] = response  
        };

    return result
}

module.exports = removeDuplicates;
