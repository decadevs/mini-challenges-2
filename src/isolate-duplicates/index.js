

function isolateDuplicates(text) {
   let count = 0;
   let texT = " ";
   let duplicates = { };

   if(typeof text !== "string") throw new Error("Enter a valid string")
   const str = text.toLocaleUpperCase();

   for(let i =0; i < text.length; i++){
    if(str[i].repeat(2)== str[i - 2] + str[i - 1]) {
        !duplicates[str[i]]? duplicates[str[str[i]]] = text[i]: duplicates [str[i]] += text[i];
        if(str[i]!== str[i + 1]){
            texT += "[" + duplicates[str [i]] + "]";
            count += 1;
            duplicates = {};

        }
    } else{texT += [i]}
   }
   return[texT, count];
}

module.exports = isolateDuplicates;
