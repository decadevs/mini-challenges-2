function isolateDuplicates(text) {
  let checked = false, result = '', sum = 0;

  for (let i = 0; i < text.length; i++){
    if (text[i] == text[i + 1]){
      sum++;
    }
    if (sum > 1 && checked == false){
      result += '['
      checked = true;
    }
    if (text[i] !== text[i + 1] && checked == true){
      result += ']';
      checked = false;
    result += text[i];
  }
    if (text[i] !== text[i + 1]){
      sum = 0;
    }
  }

  let counted = 0;
  for (let i = 0; i < result.length; i++){
    if (result[i] == ']'){
      counted++;
    }
  }
  return [result, counted];
}

module.exports = isolateDuplicates;
