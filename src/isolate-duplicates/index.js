

 function isolateDuplicates(text) {
   if(text.length <1 || typeof(text) != "string"){
     throw "Please enter a valid string"
   }
   let newArr= []
   let count= 0;
   let total= 0
   // convert string to array
   text= text.split('');
   //loop through the array index to find duplicate
   //push second duplicate if available to bracket
   for(let i=0; i < text.length; i++){
     newArr.push(text[i])
     if(text[i+1] != undefined && text[i].toLowerCase() == text[i+1].toLowerCase()){
       count++
       if(count==2){
         newArr.push('[')
         total++
       }
 
     }else if(text[i+1] != undefined && text[i].toLowerCase() !== text[i+1].toLowerCase() || i == text.length-1){
       if(count > 1){
         newArr.push(']')
       }
       count= 0
     }
   }
 
   return [newArr.join(''), total]
 }



console.log(isolateDuplicates("aabbccddeeffgg"));


console.log(isolateDuplicates("aaaabgbcdefffffffg"));
module.exports = isolateDuplicates;
