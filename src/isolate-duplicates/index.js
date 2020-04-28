function isolateDuplicates(text) {
  // handle wrong input
  if (typeof text !== "string") {
    throw "Please enter a valid string";
  }
  // declare needed variables
  let letters = text.split("");
  let output = [];
  let count = 0;
  let unique = new Set();
  let string = "";
  let index;
  //create loop to iterate through letters
  for (let i = 0; i < letters.length; i += index) {
    //check if letter has been checked
    if (unique.has(letters[i])) {
      continue;
    } else {
      //add letter to set and string
      unique.add(letters[i]);
      if (letters[i - 1] === letters[i]) {
        break;
      }
      string += letters[i];
      //declare variables for bracket and inner count
      var bracket = "";
      let inner = 0;
      //check for count of letter
      for (let j = i + 1; j < letters.length; j++) {
        if (letters[i].toLowerCase() === letters[j].toLowerCase()) {
          //check if letter is up to two
          if (inner < 1) {
            string += letters[j];
            inner++;
            continue;
          } else {
            //populate letters for bracket
            bracket += letters[j];
          }
        } else {
          // get value for next iteration
          index = j - i;
          break;
        }
      }
      //check if addition was made
    }
    if (bracket !== "") {
      let first = "[";
      bracket += "]";
      first += bracket;
      string += first;
      count++;
    }
    // clear the set
    unique.delete(letters[i]);
  }
  // set the outut
  output.push(string, count);
  return output;
}

module.exports = isolateDuplicates;
