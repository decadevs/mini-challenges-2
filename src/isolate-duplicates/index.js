function isolateDuplicates(text) {
   //split the string input to get an array
   
    const myArr = text.split("");
    //console.log(myArr);
    let len = text.length;
    //loop through to find duplicate alphabet in the array
    //if 
   for(let i =2; i=len; i++){
      if(myArr[i-2]=== myArr[i] && myArr[i-1] === myArr[i]){
         let j = i;
         while(myArr[j+1]=== myArr[j]){
            j++;
         }
         myArr.splice(i,0,'[');
         myArr.splice(j+2,0,']');
         i = j+1;
      }
   }
//  const duplicate = [];
//  let len = text.length;
//  for(let i = 0; i<len-1; i++){
//     for(let j=i+1; j<len; j++) {
//       if(myArr[i]===myArr[j]){
//          return duplicate.push(myArr[i])
//       }
//     }
//  }  
 return myArr.join('');

}


isolateDuplicates("aaaabbcdefffffffg")
module.exports = isolateDuplicates;
