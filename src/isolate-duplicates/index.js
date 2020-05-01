function isolateDuplicates(text) {

  let result = [];
  let firstCharIndex;
  let consecutiveCharIndex = 1;
  let subsequentChar = 2;
  let numberDuplicate = 0;
  let duplicateStr = '';
  let reoccurStrs = false;

  if(text === null || typeof text !== 'string'){
    throw('Please enter a valid string');
  }
  else{

    for(let i = 0; i < text.length; i++){

      if(i === 0){
        result.push(text[i]);
        consecutiveCharIndex++;
      }
      else{

        if(text[i].toLocaleLowerCase() === text[i - 1].toLocaleLowerCase() && consecutiveCharIndex < 3){
          result.push(text[i]);
          consecutiveCharIndex++;
        }

        else if(text[i].toLocaleLowerCase() === text[i - 1].toLocaleLowerCase() && consecutiveCharIndex >= 3){
          duplicateStr += text[i];
          consecutiveCharIndex++
        }

        else if(text[i].toLocaleLowerCase() !== text[i - 1].toLocaleLowerCase()){

          if(duplicateStr !== ''){
            result.push(`[${duplicateStr}]`);
            numberDuplicate++;
            duplicateStr = '';
          }

          result.push(text[i]);
          consecutiveCharIndex = 2;
        }

        if(text[i].toLocaleLowerCase() === text[i - 1].toLocaleLowerCase() && i === text.length - 1){
          if(duplicateStr !== ''){
            result.push(`[${duplicateStr}]`);
            numberDuplicate++;
            duplicateStr = '';
          }
        }

      }

    }
    //console.log([result.join(''), numberDuplicate]);
    return([result.join(''), numberDuplicate]);

  }

}

//isolateDuplicates("hellllloooooodeeeecadevvsss");
//isolateDuplicates("iiijjjjooooppppp");
module.exports = isolateDuplicates;
