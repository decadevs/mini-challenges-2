function removeDuplicates(obj) {
    let obj1={}
    let arrOfKey=Object.keys(obj)
    let arrOfKeys=[String(Math.min(...arrOfKey))]
    for(var i=0;i<arrOfKey.length;i++){
      if(arrOfKeys[arrOfKeys.length-1]<Number(arrOfKey[i])){
        arrOfKeys.push(arrOfKey[i])
      }
    }
    let arrOfValues=[]
    for(var i=0;i<arrOfKeys.length;i++){
      arrOfValues.push([...new Set(obj[arrOfKeys[i]])])
    }
    let finalArray=String(arrOfValues).replace(/[,]/gi,"")
    let finalArrayOfValues=finalArray.split("")
    //let b=[...new Set(a)]
    
    //console.log(b)
    finalArrayOfValues.sort()
    let arrOfValuesWithoutDuplicate=[finalArrayOfValues[0]]
    let duplicatedValuesOfFinalArrayOfValues=[]
    for(var k=1;k<finalArrayOfValues.length;k++){
      if(arrOfValuesWithoutDuplicate[arrOfValuesWithoutDuplicate.length-1]==finalArrayOfValues[k]){
        duplicatedValuesOfFinalArrayOfValues.push(finalArrayOfValues[k])
      }
      else{
        arrOfValuesWithoutDuplicate.push(finalArrayOfValues[k])
      }
      }
    let finalDuplicatedValuesOfFinalArrayOfValues=[...new Set(duplicatedValuesOfFinalArrayOfValues)]
    let arrOfIndexOfArrayOfValuesWithDuplicatedValues=[]
    for(var i=0;i<finalDuplicatedValuesOfFinalArrayOfValues.length;i++){
      let b2=[]
      for(var j=0;j<arrOfValues.length;j++){
        if(arrOfValues[j].includes(finalDuplicatedValuesOfFinalArrayOfValues[i])===true){
          b2.push(j)
        }
      }
      arrOfIndexOfArrayOfValuesWithDuplicatedValues.push(b2)
    }
  let arrOfStringValuesInArrayOfValues=arrOfValues.map((x)=>x.join(''))
  //let m=y[1].replace("L",1)
  for(var i=0;i<arrOfValues.length;i++){
    for(var j=0;j<arrOfIndexOfArrayOfValuesWithDuplicatedValues.length;j++){
      for(var k=0;k<arrOfIndexOfArrayOfValuesWithDuplicatedValues[j].length-1;k++){
        if(i==arrOfIndexOfArrayOfValuesWithDuplicatedValues[j][k]){
          let h=arrOfStringValuesInArrayOfValues[i].replace(finalDuplicatedValuesOfFinalArrayOfValues[j],"")
          arrOfStringValuesInArrayOfValues[i]=h
          }
      }
    }
  }
  arrOfStringValuesInArrayOfValues
  finalDuplicatedValuesOfFinalArrayOfValues=arrOfStringValuesInArrayOfValues.map((x)=>x.split(''))
  arrOfKeys.forEach((keys,values)=>obj1[(keys)]=finalDuplicatedValuesOfFinalArrayOfValues[values])
  return obj1
}

module.exports = removeDuplicates;
