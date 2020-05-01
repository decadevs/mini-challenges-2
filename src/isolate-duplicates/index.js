function isolateDuplicates(text) {


  if (typeof text !== 'string') {
  throw new Error ("Please enter a valid string");
  }

  else {
    let textUpperCase = text.toUpperCase();

    let textSplit = textUpperCase.match(/(.)\1*/g);

    let eachIndex = [];
    for (let i = 0; i < textSplit.length; i ++) {
      eachIndex.push(textSplit[i].length);
    }
    //Cumulative of eachIndex
    let cumEachIndex = [];
    eachIndex.reduce(function(a,b,i) {return cumEachIndex[i] = a+b; }, 0)

    let newTextSplit = [text.slice(0,eachIndex[0])];
    for(let j = 1; j < cumEachIndex.length; j++) {
      let largeStr = text.slice(0,cumEachIndex[j]);
      let shortStr = largeStr.slice(cumEachIndex[j - 1],cumEachIndex[j]);
      newTextSplit.push(shortStr);
    }

    let textDupulicate = "";
    for (let j = 0; j < newTextSplit.length; j++) {
      if (eachIndex[j] == 1) {
        textDupulicate += newTextSplit[j][0];
      }
      else if (eachIndex[j] == 2) {
        textDupulicate += newTextSplit[j][0];
        textDupulicate += newTextSplit[j][1];
      }
      else if (eachIndex[j] >= 3) {
        let arrSplit = newTextSplit[j].split('');
        arrSplit.shift();
        arrSplit.shift();
        let myDup = "";
        for (m =0; m < arrSplit.length; m++) {
          myDup += arrSplit[m];
        }

        textDupulicate += newTextSplit[j][0];
        textDupulicate += newTextSplit[j][1];
        textDupulicate += '[';
        textDupulicate += myDup;
        textDupulicate += ']';
      }
    }

    let noOfDuplicate = 0;
    for (let k = 0; k < textDupulicate.length; k++) {
      if (textDupulicate[k] == '[') {
        noOfDuplicate += 1;
      }
    }
    const myIsolateDuplicate = [textDupulicate,noOfDuplicate];

    return myIsolateDuplicate;
  }
}

module.exports = isolateDuplicates;
