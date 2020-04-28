function removeDuplicates(obj) {


    /* Steps to removing duplicates
        1. Remove duplicate item from each Array
            a. first define a function with parameter of the array to remove duplicate from, and a callback function
            b. declare variable filteredArray  and arrayNoDuplicate, where later as an empty earray
            c. loop through each item in the array using for loop
                1. define a callback function with item of the array as parameter 
                2. filter the array where each item of the array is same with the callback parameter
                    1. if the length of the filteredArray is < 2; this means the current item checked using the callback has no duplicate
                    2. else //we need to return the first item
                        a. if the arrayNoDuplicate does not contain that item
                        b. push it into arrayNoDuplicate
            callback with the next array item as argument
        
        2. Keep keys of the obj in a seperate array and use it to get the array to be passed as parameter for removeDuplicate
        3. Remove Intersect Items from Lower Level keys in the array
            a.  define a variable removedIntersect
            b.  Loop through the noDuplicateArray
                1.  declare as emoty array- nonIntersect,othersNoDuplicate
                2.  declare currentNoDuplicate as current array of the noDuplicateArray
                3.  declare othersStartAtPos as current array position + 1
                4.  if othersStartAtPos is equal to  length of noDuplcate; this means we have reached the end of the array and it will have no next array 
                    a.  push the current array in removedIntersect
                    else
                    a.  while othersStartPos less than length of noDuplicate
                        push the array to othersNoDuplicate
                    b.  loop through currentNoDuplicate 
                        1. loop through othersNoDuplicate
                            a. if othersNoDuplicate does not contain currentNoDuplicate item
                                1. increment count //count to show it has no intersection with that other Array
                            b. if count is equal to othersNoDuplicate
                                1. it means it has successfull traversed otherArray and yet no Intersection
                                2. push the current item into the nonIntersect array  
                push the nonIntersect into the removedIntersect
            continue with next array item from the noDuplicateArray

        4. loop through keys and make each of the array in removedIntersect the value

    */

    function removeDuplicate(array,callback){
        let filteredArray;
        let arrayNoDuplicate = []
        for (let i = 0; i < array.length; i++) {
            function callback(j) {
                filteredArray = array.filter(a => a === j)
                if (filteredArray.length < 2) {//no duplicate
                    arrayNoDuplicate.push(j)
                }
                else {
                    if (!arrayNoDuplicate.includes(j)) {
                        arrayNoDuplicate.push(j)
                    }
                }
            }
            callback(array[i])
        }
        return arrayNoDuplicate
    }

    let objKeys = Object.keys(obj)

    //remove duplicates from obj
    let noDuplicate = []
    for (let j = 0; j < objKeys.length; j++) {
        noDuplicate.push(removeDuplicate(obj[objKeys[j]]))
    }

    let removedIntersect=[]
    for(let i=0;i<noDuplicate.length;i++){
        let nonIntersect=[]
        let currentNoDuplicate=noDuplicate[i]
        let othersNoDuplicate=[]
        let othersStartPos=i+1

        if(othersStartPos===noDuplicate.length){
            removedIntersect.push(currentNoDuplicate)
        }
        

    }





}

module.exports = removeDuplicates;
