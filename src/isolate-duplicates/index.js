function isolateDuplicates(text) {
  const array = str.split('');
  const duplicatesChars = [];
  const sortedArray = [array].sort();

  sortedArray.forEach ((elem, index) => {
    if(sortedArray[index + 1] === elem){
      duplicatesChars.push(elem);
    }
  })
  return duplicatesChars;
}

module.exports = isolateDuplicates;
