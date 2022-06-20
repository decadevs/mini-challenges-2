function isolateDuplicates(text) {
  let counter = 0;
  let strValue = "";
  let duplicate = {};
  
 
  if (typeof text !== "string") throw new Error("Please enter a valid string")
  const str = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
      if (str[i].repeat(2) === str[i - 2] + str[i - 1]) {
          !duplicate[str[i]] ? duplicate[str[i]] = text[i]:duplicate[str[i]] += text[i]
          if (str[i] !== str[i + 1]) {
              strValue += "[" + duplicate[str[i]] + "]";
              counter += 1;
              duplicate = {}; 
          }
      } else { strValue += text[i]; }
  }
  return [strValue, counter]
}

module.exports = isolateDuplicates;
