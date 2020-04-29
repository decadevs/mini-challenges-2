function isolateDuplicates(text) {

  let result = [];
  let firstCharIndex;
  let consecutiveCharIndex = 0;
  let subsequentChar = 1;
  let numberDuplicate = 0;
  let duplicateStr = '';

  if(text === null || typeof text !== 'string'){
    throw('Please enter a valid string');
  }
  else{

    for(let i = 0; i < text.length; i++){

      if(!(result.includes(text[i]))){

        if(duplicateStr !== ''){
          result.push(`[${duplicateStr}]`);
          consecutiveCharIndex = 0;
          duplicateStr = '';
          numberDuplicate++;
        }

        result.push(text[i]);
        firstCharIndex = i;
        consecutiveCharIndex = 0;

      }

      //Find the second consective character and push into array
      else if(result.includes(text[i]) && i === firstCharIndex + 1 && text[i] === text[firstCharIndex]){
        result.push(text[i]);
        consecutiveCharIndex = firstCharIndex + 1;
      }

      //To detect if there is another character of the same type after the second consecutive character
      else if(result.includes(text[i]) && text[i] === text[consecutiveCharIndex] && i > 0){
        duplicateStr += text[i];
        consecutiveCharIndex++;
      }

      //To detect strings that reocurred.
      if(result.includes(text[i]) && text[i] !== text[firstCharIndex]){
        if(i === firstCharIndex + subsequentChar && i - firstCharIndex === 1){
          result.push(text[i]);
          subsequentChar++;
        }

        else if(text[i] === text[firstCharIndex + subsequentChar] && i - firstCharIndex === 2){
          result.push(text[i]);
          subsequentChar++;
          consecutiveCharIndex = firstCharIndex + subsequentChar;
        }

        else if(text[i] === text[consecutiveCharIndex] && i - firstCharIndex > 2){
          duplicateStr += text[i];
          subsequentChar++;
          consecutiveCharIndex += 1;
        }

        //subsequentChar++;

      }

    }
    console.log([result.join(''), numberDuplicate]);
    return([result.join(''), numberDuplicate]);

  }
  // else{

  //   for(let i = 0; i < text.length; i++){
  //     if(!(result.includes(text[i]))){

  //       //Detect the last duplicated consecutive character and push into array.
  //       if(consecutiveCharIndex > 0 && duplicateStr !== ''){
  //         duplicateStr = '[' + duplicateStr + ']';
  //         result.push(duplicateStr);
  //         numberDuplicate++;
  //         duplicateStr = '';
  //         consecutiveCharIndex = 0;
  //       }

  //         result.push(text[i]);
  //         firstCharIndex = i;
  //         consecutiveCharIndex = 0;

  //     }



  //     //Find the second consective character and push into array
  //     if(result.includes(text[i]) && i === firstCharIndex + 1 && text[i] === text[firstCharIndex]){
  //       result.push(text[i]);
  //     }

  //     if(result.includes(text[i]) && (i === firstCharIndex + 1 || i === firstCharIndex + 2) && text[i] !== text[firstCharIndex]){
  //       result.push(text[i]);
  //     }

  //     //To detect if there is character of the same type immediately after the second character
  //     if(result.includes(text[i]) && i === firstCharIndex + 2 && text[i] === text[firstCharIndex + 1]){consecutiveCharIndex = firstCharIndex + 2}


  //     if(result.includes(text[i]) && i > 0 && i === consecutiveCharIndex){
  //       //console.log(i)
  //       duplicateStr += text[i];
  //       consecutiveCharIndex++;
  //       ** */ if(i <= text.lastIndexOf(text[i])){
  //         duplicateStr += text[i];
  //         if(i === text.lastIndexOf(text[i])){
  //           duplicateStr = '[' + duplicateStr + ']';
  //           result.push(duplicateStr);
  //           numberDuplicate++;
  //           duplicateStr = '';
  //         }
  //       }
  //     }

  //   }

  //   console.log([result.join(''), numberDuplicate]);

  // }

}

//isolateDuplicates("hellllloooooodeeeecadevvsss");
isolateDuplicates("helloookat");
module.exports = isolateDuplicates;
