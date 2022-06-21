
  function isolateDuplicates(text) {
    if (typeof(text) !== "string") throw new Error("Please enter a valid string");

    let caseText = text.toUpperCase();
    let ref = caseText[0], arrayOfDups = [];
    let tracker = 0, ifNoOpening = false, duplicates = 0;

    for (let i = 0; i < text.length; i++) {
        //checking if 2 duplicates already exists, and opening with '[' if so
      if (tracker === 2 && caseText[i] === arrayOfDups[arrayOfDups.length - 1].toLocaleUpperCase()) {
        arrayOfDups.push('[');
        ifNoOpening = true;
      }
      // changing the ref and subsequently closing with ']' if open
      if (ref!== caseText[i]) {
        ref = caseText[i];
        tracker = 0;
        if (ifNoOpening) {
          arrayOfDups.push(']');
          ifNoOpening = false;
          duplicates++;
        }
      }
      //pushing individual alphabets
      arrayOfDups.push(text[i]);
      tracker++;
      //checking to close it off if its open and the last letter
      if (i === text.length - 1 && ifNoOpening) {
        arrayOfDups.push(']');
        duplicates++;
      }
    }
    return [...arrayOfDups.join('').split(), duplicates]
  }
  module.exports = isolateDuplicates;





