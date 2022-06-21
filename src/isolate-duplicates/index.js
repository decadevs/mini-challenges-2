function isolateDuplicates(text) {
  let result = '';
  let armed = false;
  let count = 0;

  for (let i = 0; i < text.length; i++){
    if (text[i] == text[i + 1]){
      count++;
    }
    result += text[i];
    if (count > 1 && armed == false){
      result += '['
      armed = true;
    }
    if (text[i] !== text[i + 1] && armed == true){
      result += ']';
      armed = false;
    }
    if (text[i] !== text[i + 1]){
      count = 0;
    }
  }

  let sum = 0;
  for (let i = 0; i < result.length; i++){
    if (result[i] == ']'){
      sum++;
    }
  }
  return [result, sum];
}

module.exports = isolateDuplicates;
