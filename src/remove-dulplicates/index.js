function removeDuplicates(obj) {
    let c = [];
    let diff = (a, b) => [...new Set([...a].filter((x) => !b.includes(x)))];
    return Object.entries(obj)
      .reverse()
      .map((entry) => {
        const subCollector = c;
        c = [...new Set([...c, ...entry[1]])];
        return [entry[0], [...new Set(diff(entry[1], subCollector))]];
      })
      .reduce((arrays, array) => ((arrays[array[0]] = array[1]), arrays), {});
    }

    console.log(removeDuplicates({
        "432": ["A", "A", "B", "D"],
        "53": ["L", "G", "B", "C"],
        "236": ["L", "A", "X", "G", "H", "X"],
        "11": ["P", "R", "S", "D"]
      }))
 
  module.exports = removeDuplicates;