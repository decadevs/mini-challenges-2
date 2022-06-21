function removeDuplicates(obj) {
    // create another copy of same input 
  let myObject = obj;

  // for loop create a unique set for the two array value in the object. (remove duplicate of char)
  for(i in obj){

  myObject[i] = [...new Set(myObject[i])];

  obj[i] = [...new Set(obj[i])]

  }

  // for loop deeply destructure the object
  for(i in obj){

  obj[i].forEach(array1=>{

  for(j in myObject){

  myObject[j].forEach(array2=>{

  if(array1 === array2 && i != j){

  myObject[i] = myObject[i].filter((value)=> value != array1)

  }

  })

  }

  })

  }

  return myObject;
    
}

module.exports = removeDuplicates;
