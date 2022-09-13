function removeDuplicates(obj) {
  let values = Object.values(obj);
  let str = "";
  let strArr = [];
  values.forEach((element) => {
    element.forEach((e) => {
      str += e;
      strArr.push(e);
    });
  });

  console.log(str, strArr);

  // check if duplicate exits

  for(let i=0; i<str.length;i++){
    let id = 1
    let current = str.charAt(i)
    let next = str.charAt(i+1)
    for (let index = 0; index < strArr.length; index++) {
        
       if(current==strArr[index]){
        id+=1
        console.log([id,index,current,strArr[index]])
       }
        
    }
    // console.log(`curent:${current}: next:${next}`,current==next)
  }
}

module.exports = removeDuplicates;

removeDuplicates({
  1: ["C", "F", "G"],
  2: ["A", "B", "C"],
  3: ["A", "B", "D"],
});
