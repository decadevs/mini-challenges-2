/**MY ALGORITHM
 * 1. if the text is not a string throw an error
 * 2.  else replace the text with a regex which isolates the duplicates ignoring casing
 * 3. loop through the isolates to determone the number of open and close brackets
 *      - this will be use to determine the number of isolated duplicates in the string
 * 4. Return an array containing the isolates and the number of isolated duplicates
 *
 *
 */

function isolateDuplicates(text) {
  let isolates;
  result = [];
  count = 0;
  if (typeof text !== "string") throw "Please enter a valid string";
  else isolates = text.replace(/(([a-zA-Z])\2)(\2+)/gi, "$1[$3]");

  for (let i = 0; i < isolates.length; i++) {
    if (isolates[i] === "[" || isolates[i] === "]") {
      count++;
    }
  }
  result.push(isolates);
  result.push(count / 2);
  return result;
}

console.log(isolateDuplicates("aaaabbcdefffffffg"));
module.exports = isolateDuplicates;
