function removeDuplicates(obj) 
{
    //if empty parameter or empty array
    if(obj === undefined)
    {
        return `Object is underfined`;
    }

    /*variable to get the object keys(i.e properties). The function Object.key() by default 
    *returns array of all the object keys sorted in ascending order when the keys are numbers 
    *(i.e 1,2,3,...) or quoted(string) numbers (i.e "1","2","3",...)*/
    let keys = Object.keys(obj);

    //loop through the object keys referencing the values and perform the underly operation
    for (let k = 0; k < keys.length; k++)
    {
        //within the value of each key that is an array, loop through the elements 
        for (let i = 0; i < obj[keys[k]].length; i++)
        {
            //if any element has more than one index... 
            if (obj[keys[k]].indexOf(obj[keys[k]][i]) !== i)
            {
                //...such element is a duplicate. target it and remove it. 
                obj[keys[k]].splice(i, 1);
            } 
            //double check each current and next element to ensure no duplicate is left
            else if(obj[keys[k]][i] === obj[keys[k]][i + 1])
            {                
                obj[keys[k]].splice(i + 1, 1);                    
            }
            //check all previous key values using this loop
             for (let j = 1; j < keys.length; j++)
             {
             /*if any previous key/s i.e keys[k - 1], keys[k - 2],..., keys[n] 
             * exists before the current key i.e keys[k] */
                 if (obj.hasOwnProperty(keys[k - j]))
                 {
                    /*if there is any duplicate element in such previous key with
                     * respect to the current key */     
                     if (obj[keys[k - j]].indexOf(obj[keys[k]][i]) >= 0)
                     {
                         //target such duplicate element using this for loop
                         for (let v = 0; v < obj[keys[k-j]].length; v++)                        
                             if(obj[keys[k - j]][v] === obj[keys[k]][i])
                                 obj[keys[k-j]].splice(v, 1);//remove any such duplicate
                     }
                 }
                 else
                 {
                     break;
                 }
             }
        }
    }
    return obj;
}

module.exports = removeDuplicates;

console.log(removeDuplicates());