function removeDuplicates(obj) {
    let tempObj = obj; //get a copy of the object
    for(key in tempObj){
      tempObj[key] = [...new Set(tempObj[key])]; //get unique keys in object
      obj[key] = [...new Set(obj[key])]
    }
    for(key in obj){
      //loop through each key in object
      obj[key].forEach(item=>{
        for(key2 in tempObj){
          tempObj[key2].forEach(item2=>{
            if(item === item2 && key != key2){
              tempObj[key] = tempObj[key].filter((value)=> value != item) //remove duplicate keys
            }
          })
        }
      })
    }
    return tempObj;
}

module.exports = removeDuplicates;
