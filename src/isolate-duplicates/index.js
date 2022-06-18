function isolateDuplicates(text)
{
  if (typeof text !== "string")
  {
    throw "Please enter a valid string";
  }

  let runningCount = [], isolating = false;
  let newText = "", isolateCount = 0;
  for (c of text)
  {
    //recognize character repetition (case insensitive)
    if (String(runningCount[0]).toUpperCase() === String(c).toUpperCase())
    {
      runningCount.push(c);
      if (runningCount.length > 2 && isolating === false)
      {
        //begin isolating repeated character. Restart running count
        isolating = true;
        runningCount = [c];
      }
      else if (isolating === false)
      {
        //repetition has only happened once- add character to result
        newText += c;
      }
    }
    else
    {
      //no repetition
      if (isolating === true)
      {
        //repetition has ended- stop isolating characters
        newText += '[' + runningCount.join('') + ']';
        isolateCount++;
        isolating = false;
      }
      runningCount = [c];
      newText += c;
    }
  }
  //isolation may still be ongoing at end of text
  if (isolating === true)
  {
    newText += '[' + runningCount.join('') + ']';
    isolateCount++;
  }
  return [newText, isolateCount];
}

module.exports = isolateDuplicates;
