function isolateDuplicates(text) {

  let result = [];
  let firstCharIndex;
  let consecutiveCharIndex = 0;
  let numberDuplicate = 0;
  let duplicateStr = '';

  if(text === null){return '';}
  if(text !== String(text)){
    return('Please enter a valid string');
  }
  else{

    for(let i = 0; i < text.length; i++){
      if(!(result.includes(text[i]))){

        //Detect the last duplicated consecutive character and push into array.
        if(consecutiveCharIndex > 0 && duplicateStr !== ''){
          duplicateStr = '[' + duplicateStr + ']';
          result.push(duplicateStr);
          numberDuplicate++;

          consecutiveCharIndex = 0;
        }
        if(duplicateStr === ''){
          result.push(text[i]);
          firstCharIndex = i;
          consecutiveCharIndex = 0;
        }
        duplicateStr = '';


      }



      //Find the second consective character and push into array
      if(result.includes(text[i]) && i === firstCharIndex + 1 && text[i] === text[firstCharIndex]){
        result.push(text[i]);
      }

      if(result.includes(text[i]) && (i === firstCharIndex + 1 || i === firstCharIndex + 2) && text[i] !== text[firstCharIndex]){
        result.push(text[i]);
      }

      //To detect if there is character of the same type immediately after the second character
      if(result.includes(text[i]) && i === firstCharIndex + 2 && text[i] === text[firstCharIndex + 1]){consecutiveCharIndex = firstCharIndex + 2}


      if(result.includes(text[i]) && i > 0 && i === consecutiveCharIndex){
        //console.log(i)
        duplicateStr += text[i];
        consecutiveCharIndex++;
        // if(i <= text.lastIndexOf(text[i])){
        //   duplicateStr += text[i];
        //   if(i === text.lastIndexOf(text[i])){
        //     duplicateStr = '[' + duplicateStr + ']';
        //     result.push(duplicateStr);
        //     numberDuplicate++;
        //     duplicateStr = '';
        //   }
        // }
      }
    }

    console.log([result.join(''), numberDuplicate]);

  }

}

isolateDuplicates("booodooop");
module.exports = isolateDuplicates;
