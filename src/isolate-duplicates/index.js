function isolateDuplicates (text) {
  if (typeof text !== "string") {
    throw new Error("Please enter a valid string");
  }
  //Create an ordered hash table using array.
  const HASH_TABLE = [];
  let isolatedText = [];
  let counter = 0;
  const caseInsensitive = text.toUpperCase().split(""); //for easy comparism and preservation of case.
  text = text.split("");
  for (let index = 0; index < text.length; ++index) {
    //map unique value to hash table.
    if (caseInsensitive[index] !== caseInsensitive[index + 1])
      HASH_TABLE.push([text[index]]);
  }
  // A function to populate hash table.
  const updateHashMap = (array, comparison, compareCha) => {
    let container = [];
    for (let i = 0; i < array.length; ++i) {
      if (comparison[i] !== comparison[i + 1]) break;
      if (
        comparison[i] === comparison[i + 1] &&
        comparison[i] === compareCha.toUpperCase()
      ) {
        container.push(array[i]);
      }
    }
    let last = array[container.length];
    container.push(last);
    for (let j = 0; j <= container.length - 1; ++j) {
      array.shift(compareCha);
      comparison.shift(container[j]);
    }
    return container;
  };
  // Populate the table and isolate the excess.
  for (let i = 0; i < HASH_TABLE.length; ++i) {
    HASH_TABLE[i] = [
      ...HASH_TABLE[i].concat(
        updateHashMap(text, caseInsensitive, HASH_TABLE[i][0])
      ),
    ];
    HASH_TABLE[i].splice(0, 1);
    if (HASH_TABLE[i].length > 2) {
      HASH_TABLE[i].splice(HASH_TABLE[i].length, 0, "]");
      HASH_TABLE[i].splice(2, 0, "[");
      counter++;
    }
    isolatedText = isolatedText.concat(HASH_TABLE[i]);
  }
  return [isolatedText.join(""), counter];
};

module.exports = isolateDuplicates;
