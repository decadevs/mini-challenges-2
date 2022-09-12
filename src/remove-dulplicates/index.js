function removeDuplicates(obj) {
    var keys = Object.keys(obj)
    keys.sort().reverse()
    seenBefore = new Set()
    answer = {}
    for (var key of keys) { 
        for (var value of obj[key]) {
            if (!seenBefore.has(value)) {
                answer[key] = [...(answer[key] || []), value]
                seenBefore.add(value)
            }
        }
    }
    return answer
}



module.exports = removeDuplicates;
