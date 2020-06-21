function removeDuplicates(obj) {
	let objCopy =obj;
	let objKeys = Object.keys(obj).
	map(a=>{return Number(a)}).sort((a,b)=>{return a-b});

	let objCopyKeys = Object.keys(objCopy).
	map(a=>{return Number(a)}).sort((a,b)=>{return a-b});

	objKeys.forEach((a,i)=>{
		let current = objKeys[i]+"";
     let next =  (objKeys[i]+1)+"";
     if(objCopy[next]!=undefined){
        // console.log(obj[current],objCopy[next])
        obj[current].forEach(a=>{
        	while(objCopy[next].indexOf(a)!=-1){
        		// console.log(a);
        		obj[current].splice(obj[current].indexOf(a),1);
        		console.log(obj[current])
        	}
        })
        }
	})

}

module.exports = removeDuplicates;
