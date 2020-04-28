function removeDuplicates(obj) {

    let theKeys = Object.keys(obj);
    let theValues = Object.values(obj);
    let count = 0
    let noDuplicate = []

    theValues.forEach((element, i) => {
      element.forEach(part => {
        if (!noDuplicate.includes(part)) {
          noDuplicate.push(part)
        }
      })
    })
    //noDuplicate
    //theKeys
    let returned = {}
    Object.keys(obj).reverse().forEach(element => {
      returned[element] = []
      //console.log(obj[element])
      obj[element].forEach((ler) => {
        //console.log(ler)
        noDuplicate.forEach((char, i) => {
          //console.log(char)
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
