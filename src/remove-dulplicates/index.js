function removeDuplicates(obj) {
    let key = null
    let values = null
    
    // Get the array of keys
    let keys = Object.keys( obj );
    console.log(keys)
    // Sort the keys in descending order
    let sorted = keys.sort( function ( a, b ) { return a - b } )
    console.log(sorted)
    // Map sorted objects in descending order
    let newOrder = {}

    // Iterate through the array of keys and access the corresponding object properties
    for (let i = 0; i < sorted.length; i++) {
        key = sorted[i]
        values = obj[sorted[i]]
        newOrder[key] = values
    }
    return newOrder
}

module.exports = removeDuplicates;
