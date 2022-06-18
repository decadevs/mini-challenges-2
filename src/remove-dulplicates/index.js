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
      let lastEntry = alreadyAppeared[str];
      if (lastEntry?.length)
      {
        /* same array- mark current duplicate for removal and skip ahead
        otherwise mark previous occurrence for removal */
        if (lastEntry[0] === key)
        {
          obj[key][i] = null;
          continue;
        }
        obj[lastEntry[0]][lastEntry[1]] = null;
      }
      alreadyAppeared[str] = [key, i];
    }
  }
  keys.map(key => {
    result[key] = obj[key].filter(x => x !== null)
  })
  return result;
}

module.exports = removeDuplicates;
