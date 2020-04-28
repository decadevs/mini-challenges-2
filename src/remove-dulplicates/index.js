function removeDuplicates(obj) {

    let theKeys = Object.keys(obj);
    let theValues = Object.values(obj);
    let count = 0

    returned = Object.values(obj).reduce((final, element, i, arr) => {
      final[theKeys[i]] = []

      element.forEach((value, j, arr2) => {

        for (let i = 0; i < theValues.length; i++) {
          for (let j = 0; j < theValues[i].length; j++) {
            if (theValues[i][j] === value) {
              count += 1
            }
          }
        }
        if (!(count > 1)) {
          final[theKeys[i]].push(value)
        }
        count = 0
      });
      theValues.splice(0, 1)
      return final
      
    }, {})

    return returned;
}

module.exports = removeDuplicates;
