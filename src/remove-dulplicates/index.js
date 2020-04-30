function removeDuplicates(obj) {
    let keys = Object.keys(obj)
    let stack = []
    for (let index = keys.length - 1; index >= 0; index--) {
        let key = keys[index] 
        let temp = obj[key] 
        obj[key] = temp.filter((el) => {
            if (stack.indexOf(el) < 0) {
                stack.push(el)
                return true
            }
            return false
        })        
    }
    return obj
}

module.exports = removeDuplicates;
