function removeDuplicates(obj) {

  const keyHolder = Object.keys(obj);
  keyHolder
  const duplicated = {};
  let arrayPseudo = [];

  keyHolder.reverse().forEach((key) => {

      obj[key] = [...new Set(obj[key])];
      //
      obj[key].forEach((char) => {
          if (!duplicated[char]) {
              duplicated[char] = true;
              arrayPseudo.push(char);
          }
      });
      obj[key] = arrayPseudo;
      arrayPseudo = [];
  });
  return obj;

}
 

module.exports = removeDuplicates;
