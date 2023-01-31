function removeDuplicates(obj) {
let n = []

let rep = (a, b) => [...new Set([...a].filter( x => !b.includes(x)))];

return Object.entries(obj).reverse().map(element => {
    const aux = n;
    n = [...new Set([...n, ...element[1]])];

    return [element[0],[...new Set(rep (element[1], aux))] ];
}).reduce((arrays, array) => ((arrays[array[0]] = array[1]), arrays), {});

    }

module.exports = removeDuplicates;
