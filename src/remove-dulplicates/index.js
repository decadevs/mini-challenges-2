function removeDuplicates(obj) {

  let arr = [];
for(let key in obj){
  arr.push(key);
}
arr.sort((a,b)=>a-b)
for(let i=0; i<arr.length;i++){
  let content = obj[arr[i]];
//console.log(content)
   let newArray =[];
  for(let j=0; j<content.length;j++ ){
    //console.log(content[j])
     let checker = true;
    for(let k=i+1; k<arr.length;k++){
      //console.log(obj[arr[k]])
       if(obj[arr[k]].indexOf(content[j])>=0){
         checker = false;
       }
       }
    if(checker)
      newArray.push(content[j])
     // console.log(newArray)
  }
   let finalArray = new Set(newArray);
   //console.log(finalArray)

  obj[arr[i]]=Array.from(finalArray);
}
 return obj
}

module.exports = removeDuplicates;
