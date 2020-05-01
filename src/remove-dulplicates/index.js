function removeDuplicates(obj) {
  //take care of empty object
  if (Object.keys(obj).length === 0 && obj.constructor === Object) {
    return obj;
  }
  //create working array and object
  let arr = [];
  let objs = {};
  //get the object keys
  for (let key in obj) {
    arr.push(Number(key));
  }
  //sort arr
  arr.sort((a, b) => a - b);
  //convert back to properties;
  let props = arr.map(String);
  //check each one
  for (let i = 0; i < arr.length; i++) {
    //destructure
    let curr = obj[props[i]];
    //take care of empty arrays
    if (curr.length < 1 || curr == undefined) {
      continue;
    }
    //search for duplicates using Set
    let work = new Set();
    for (let j = 0; j < curr.length; j++) {
      work.add(curr[j]);
    }
    curr = Array.from(work);
    objs[arr[i]] = curr;
  }
  // now we have the arrays with their double chars removed
  // create data pool and working object
  let obs = {};
  let data = new Set();
  //add to pool and check for existing
  for (let l = arr.length - 1; l >= 0; l--) {
    //destructure
    let add = objs[props[l]];
    //create working array
    let worker = [];
    //check if value is not in data and update accordingly
    for (let m = 0; m < add.length; m++) {
      if (!data.has(add[m])) {
        worker.push(add[m]);
        data.add(add[m]);
      }
      obs[props[l]] = worker;
    }
  }
  //now create output obj with right order
  let out = {};
  //populate out
  for (let n = 0; n < arr.length; n++) {
    out[props[n]] = obs[props[n]];
  }
  //return output
  return out;
}

module.exports = removeDuplicates;
