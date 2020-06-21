function isolateDuplicates(text) {
if(typeof(text)!=="string")
throw "Please enter a valid string";
	let inputString = text;
  let count =0;
  let totalNumberOfDuplicate =0;
  let tempString ='';
 // console.log(tempString);
  let originalStrArr =inputString.split("");

  let originalStrArrUpperCase =inputString.toUpperCase().split("");

  for(let i =0; i<originalStrArrUpperCase.length;i++){

    if(originalStrArrUpperCase[i] != originalStrArrUpperCase[i+1] 
      
    	&& i< originalStrArrUpperCase.length){

      if(count>=2){

        tempString +=originalStrArr[i];
        tempString +=']';
        totalNumberOfDuplicate +=1;

      }else{

        tempString +=originalStrArr[i];

      }
     count =0;
    }else if((originalStrArrUpperCase[i] ==
     originalStrArrUpperCase[i+1]
     &&
      i< originalStrArrUpperCase.length)){
      count +=1;
       tempString += originalStrArr[i];
       if(count==2){
         tempString +='['   
       }
    }
  }
//console.log(totalNumberOfDuplicate);
// console.log(tempString) ;
 let outputArray = [tempString,totalNumberOfDuplicate];
 //console.log(outputArray[0],outputArray[1]);
return outputArray;
	}
module.exports = isolateDuplicates;