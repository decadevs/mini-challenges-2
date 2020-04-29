function removeDuplicates(obj) {

    let theKeys = Object.keys(obj);
    let theValues = Object.values(obj);
    let noDuplicate = []
    let returned = {}

    theValues.forEach((element, i) => {
      element.forEach(part => {
        if (!noDuplicate.includes(part)) {
          noDuplicate.push(part)
        }
      })
    })
    
    Object.keys(obj).reverse().forEach(element => {
      returned[element] = []
      obj[element].forEach((ler) => {
        noDuplicate.forEach((char, i) => {
          if (ler == char && !(returned[element].includes(ler))) {
            returned[element].push(noDuplicate[i])
            noDuplicate[i] = null
          }
        })

      });

    })

    return returned;
}

module.exports = removeDuplicates;
