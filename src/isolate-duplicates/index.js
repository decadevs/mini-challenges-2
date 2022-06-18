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
    if (String(runningCount[0]).toUpperCase() === String(c).toUpperCase())
    {
      runningCount.push(c);
      if (runningCount.length > 2 && isolating === false)
      {
        isolating = true;
        runningCount = [c];
      }
      else if (isolating === false)
      {
        newText += c;
      }
    }
    else
    {
      if (isolating === true)
      {
        newText += '[' + runningCount.join('') + ']';
        isolateCount++;
        isolating = false;
      }
      runningCount = [c];
      newText += c;
    }
  }
  //text might end with repetition
  if (isolating === true)
  {
    newText += '[' + runningCount.join('') + ']';
    isolateCount++;
  }
  return [newText, isolateCount];
}

module.exports = isolateDuplicates;
