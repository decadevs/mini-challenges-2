function isolateDuplicates(text) {
    const num = String(text).split('')
let incom = text

let str = ''

for (let i = 0;i<=incom.length-1;i++){
    if(typeof(num[i]) =='string'){
        let current = String(incom).charAt(i).toLocaleLowerCase()
        let next  = String(incom).charAt(i+1).toLocaleLowerCase()
        if(current != next){ 
            str+=num[i]+'<'
        }else{
            str+=num[i]
        }
    }else{
        
        throw("Please enter a valid string")
       
    }
   

}

console.log(str)
let arraOfchar = str.split('<')
console.log(arraOfchar)
let splitLength = 0

let forMatStr = ''

arraOfchar.forEach((ar)=>{
    if(ar.length>2){
        splitLength+=1
    }
    let excess = ar.slice(2,ar.length)
    if(excess.length>0){
        let first = ar.slice(0,2)
        return forMatStr+= `${first}[${excess}]`
    }else{
        return forMatStr+=ar
    }
    

})

return [forMatStr,splitLength]
}


console.log(isolateDuplicates("aaaabbcdefffffffg"))
    