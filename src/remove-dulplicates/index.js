function removeDuplicates(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key + ': '  + obj[key]);
    }
    let m=Object.values(obj)
    console.log(m)
  }
}
console.log(removeDuplicates(obj = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
}) )

module.exports = removeDuplicates;
