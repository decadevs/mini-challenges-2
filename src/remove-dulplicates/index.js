function removeDuplicates(obj) {
    let sandbox = [];
    let v = Object.values(obj).reverse();
    for (let x = 0; x < v.length; x++) {
       for (let i = 0; i < v[x].length; i++) {
           let letter = v[x][i];
           if (sandbox.includes(letter)) {
               if (v[x] === v[0]) {
                   let lettersIndex = v[x].lastIndexOf(letter);
                   v[x].splice(lettersIndex, 1); 
               } else {
                   while (v[x].includes(letter)) {
                       v[x].splice(v[x].lastIndexOf(letter), 1);
                   }
               }
           } else {
               sandbox.push(letter);
           }
       }
    }


    let toolbox = [];
    let j=1;
    let k=2;
    for (let y=0; y<v.length; y++) {
        let l = y-1;
        for (let i=0; i<v[y].length; i++) {
            let letter = v[y][i];
            let nextLetter = v[y][j];
            let letterAfterNext = v[y][k];
            let prev=v[l];
            if(toolbox.includes(letter)) {
                if (prev.includes(letter)) {
                    v[y].splice(i,1);
                }
            } else {
                toolbox.push(letter);
            }
            j++;
            k++;
        }
    }

    let pandorabox = [];
    for (let z=0; z<v.length; z++) {
        for (let i=0; i<v[z].length; i++) {
            let letter = v[z][i];
            if(pandorabox.includes(letter)) {
                let lettersIndex = v[z].lastIndexOf(letter);
                v[z].splice(lettersIndex, 1);
            } else {
                pandorabox.push(letter);
            }
        }
    }

    let thanos = new Object();
    let infinityStones = Object.keys(obj);
    let infinityStoneCount = 0;
    for (let item of v.reverse()) {
        thanos[infinityStones[infinityStoneCount]] =item;
        infinityStoneCount++;
    }

    return thanos;
}

module.exports = removeDuplicates;
