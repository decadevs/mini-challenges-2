function isolateDuplicates(text) {
  if((typeof text ) != "string"){
        throw "Please enter a valid string";
    }
    text=text.split("");
    let abc1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let holder1 ="",
    holder11="",
    counter=0,
    holder2 =[],
    holder3="";
    for(let a=0; a<text.length; a++){  
        let index= abc.indexOf(text[a]);
        let index1 = abc.indexOf(text[a+1]);
        if(index<0){
            index= abc1.indexOf(text[a]);
        }
        if(index1<0){
            index1= abc1.indexOf(text[a+1]);
        }
        if((text[a] == abc[index] || text[a] == abc1[index] ) && holder3.length<2){
            holder3 += text[a];
        }else if(text[a]==abc[index] || text[a] == abc1[index] ){
            holder1 += text[a];   
        }
        if (index != index1){
            if (holder3.length>0){
                holder2.push(holder3);
                holder3="";
            }
            if (holder1.length>0){
                counter += 1;
                holder11 += "[";
                holder11 += holder1;
                holder11 += "]";
                holder2.push(holder11);
                holder11="";
                holder1="";
            }
        }
    }
    let result =[];
    result.push(holder2.toString().replace(/,/g,""));
    result.push(counter);
    return result;
}

module.exports = isolateDuplicates;
