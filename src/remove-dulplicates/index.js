function removeDuplicates(obj) {
    
    let newObjectValue = [];
    let abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for(let a=0; a<Object.values(obj).length; a++){
        Object.values(obj)[a].push(Object.keys(obj)[a]);
        let hold = Object.values(obj);
        let removedup =Array.from(new Set(hold[a]));
        newObjectValue.unshift(removedup);
    }
    let holder = [];
    let holder1 =[];
    let maxholder1 = 0;
    let result =[];
    for(let b =0; b<abc.length; b++){
        for(let c =0; c<newObjectValue.length; c++){
            if(newObjectValue[c].includes(abc[b])){
                holder.push(newObjectValue[c]);
                holder1.push(+(newObjectValue[c][newObjectValue[c].length-1]))
            }
        }
        maxholder1=Math.max(...holder1)
        holder.forEach((value,index,arr)=>{
            if(value[value.indexOf(maxholder1.toString())]!= maxholder1 && arr.length>1){
                let dc = newObjectValue[newObjectValue.indexOf(value)];
                dc.splice(dc.indexOf(abc[b]), 1)
               
            }
        })
         holder =[];  
         holder1 = []; 
    } 
    let newObjKey=[];
    newObjectValue.forEach((value)=>{
        newObjKey.push(parseInt(value[value.length-1]));
    })
    let finalObjArray=[];
    let subArrayHolder =[]; 
    newObjKey=newObjKey.reverse();
    for(let x=0; x<newObjKey.length; x++){
        for(let z=0; z<newObjectValue.length; z++){
            if(newObjectValue[z].includes(newObjKey[x].toString())){
                subArrayHolder.push(newObjKey[x]);
                newObjectValue[z].pop();
                subArrayHolder.push(newObjectValue[z]);
                finalObjArray.push(subArrayHolder);
                subArrayHolder=[];
            }
        }
    }
    let resultingObj = {};
    for(let s=0; s<finalObjArray.length; s++){
        let resultingObjKey =finalObjArray[s][0]
        resultingObj[resultingObjKey.toString()] = finalObjArray[s][1];
    }  
    return resultingObj;
}

module.exports = removeDuplicates;
