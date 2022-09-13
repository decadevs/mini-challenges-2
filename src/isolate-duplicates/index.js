function isolateDuplicates(text) {
    if (arguments.length < 1 || typeof text != "string") {
        throw "Please enter a valid string";
      }
      const firstOutput = [];
      let count = 0;
      let secondOutput = 0;
      text = text.split("");
      for (let i = 0; i < text.length; i++) {
        firstOutput.push(text[i]);
        if (
          text[i + 1] != undefined &&
          text[i].toLowerCase() == text[i + 1].toLowerCase()
        ) {
          count++;
          if (count == 2) {
            firstOutput.push("[");
            secondOutput++;
          }
        } else if (
          (text[i + 1] != undefined &&
            text[i].toLowerCase() !== text[i + 1].toLowerCase()) ||
          i == text.length - 1
        ) {
          if (count > 1) {
            firstOutput.push("]");
          }
          count = 0;
        }
      }

      return [firstOutput.join(""), secondOutput];
}

module.exports = isolateDuplicates;      
