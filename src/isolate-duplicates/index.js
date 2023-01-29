function isolateDuplicates(text) {
    if (typeof text !== 'string') {
        return 'Please enter a valid string';
      }
    
      let count = 0;
      const result = text.replace(/(\w)\1{2,}/g, (match) => {
        count += 1;
        return `${match[0]}[${match.slice(1)}]`;
      });
    
      return [result, count];
}

module.exports = isolateDuplicates;
