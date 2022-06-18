function removeDuplicates(obj)
{
  let alreadyAppeared = {}, result = {};
  let keys = Object.keys(obj).sort((a, b) => parseInt(a) - parseInt(b));
  for (let key of keys)
  {
    let arr = obj[key];
    for (let i = 0; i < arr.length; i++)
    {
      let str = arr[i];
      if (alreadyAppeared[str]?.length)
      {
        //go back to previous occurrence
        let lastEntry = alreadyAppeared[str];
        if (lastEntry[0] === key)
        {
          //same array- mark duplicate for removal and skip ahead
          obj[key][i] = null;
          continue;
        }
        //otherwise mark previous occurrence for removal
        obj[lastEntry[0]][lastEntry[1]] = null;
      }
      //make note of this occurrence unless skipped
      alreadyAppeared[str] = [key, i];
    }
  }
  keys.map(key => {
    result[key] = obj[key].filter(x => x !== null)
  })
  return result;
}

module.exports = removeDuplicates;
