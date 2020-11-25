function removeDuplicates(obj) {
        var difference = (a, b) => [...new Set(
            [...a].filter(x => !b.includes(x)))];
        var collector = [];
        return Object.entries(obj).reverse().map(entry => {
            const subCollector = collector;
            collector = [...new Set([...collector, ...entry[1]])];
            return [entry[0], [...new Set(difference(entry[1], subCollector))]];
        }).reduce((arrays, array) => (arrays[array[0]] = array[1], arrays), {});
    }

module.exports = removeDuplicates;
