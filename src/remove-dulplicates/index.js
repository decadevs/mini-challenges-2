function removeDuplicates(obj) {

  for(let i in obj) {
    obj[i] = [...new Set(obj[i])]
  }
  let finalObject = obj;
  for(let i in obj) {
    obj[i].forEach((element) => {
    
      for (let j in finalObject){
        finalObject[j].forEach((element2) => {
          if(element === element2 && i != j) {
            finalObject[i] = finalObject[i].filter((value) => value !== element)
          }
        });
      }
    });
  }
  return finalObject
}



module.exports = removeDuplicates;
