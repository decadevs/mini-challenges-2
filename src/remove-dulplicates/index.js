function removeDuplicates(obj) {
    const solution = {}
    const temp = new Set()

    let objKeys = Object.keys(obj).sort((a, b) => Number(b) - Number(a))
    
    for(let key of objKeys) {
        solution[key] = []
        let arr = obj[key]

        for(let char of arr) {
            if(!temp.has(char)) {
                solution[key] = [...solution[key], char]
                temp.add(char)
            }
        }
    }
    return solution
}

module.exports = removeDuplicates;
