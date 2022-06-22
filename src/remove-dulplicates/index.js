function removeDuplicates(obj) {

  let temporaryObj = obj;

  for(key in temporaryObj){

  temporaryObj[key] = [...new Set(temporaryObj[key])];

  obj[key] = [...new Set(obj[key])]

  }

  for(key in obj){

  obj[key].forEach(item=>{

  for(key2 in temporaryObj){

  temporaryObj[key2].forEach(item2=>{

  if(item === item2 && key != key2){

  temporaryObj[key] = temporaryObj[key].filter((value)=> value != item)

  }

  })

  }

  })

  }

  return temporaryObj;

  }



  module.exports = removeDuplicates;
