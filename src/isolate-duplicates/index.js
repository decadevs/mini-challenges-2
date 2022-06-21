function isolateDuplicates(text) {
  if (typeof(text) !== "string") throw new Error("Please enter a valid string");
  
  let textEd = text.toUpperCase();
  let ref = textEd[0], duplicatedArr = [];
  let tracker = 0, isOpen = false, duplicates = 0;

  for (let i = 0; i < text.length; i++) {
      //checking if 2 duplicates already exists, and opening with '[' if so
    if (tracker === 2 && textEd[i] === duplicatedArr[duplicatedArr.length - 1].toLocaleUpperCase()) {
      duplicatedArr.push('[');
      isOpen = true;
    }
    // changing the ref and subsequently closing with ']' if open
    if (ref !== textEd[i]) {
      ref = textEd[i];
      tracker = 0;
      if (isOpen) {
        duplicatedArr.push(']');
        isOpen = false;  
        duplicates++; 
      }
    }
    //pushing individual alphabets
    duplicatedArr.push(text[i]);
    tracker++;
    //checking to close it off if its open and the last letter
    if (i === text.length - 1 && isOpen) {
      duplicatedArr.push(']');
      duplicates++;
    }
  }
  return [...duplicatedArr.join('').split(), duplicates]
}
module.exports = isolateDuplicates;
