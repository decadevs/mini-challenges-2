
//  function repeat(rep)

// {
//     let result = [];

//     let newArrary = rep.split("").sort();
//     console.log(newArrary)

//     let num = newArrary[0];
//     let a = [];
//     let counter = 0;
//     let mainArray = [];

//     console.log(newArrary)
//     for (let x = 0 ; x < newArrary.length; x ++)
//     {
//         if (newArrary[x] != num ){
//             num = newArrary[x];
//            result.push(a)

//             a = [];
//            x = x-1;
//            if(newArrary[x] == newArrary[newArrary.length - 1])
//             {
//                 x=x+1;
//                 a.push(newArrary[x]);
//             }

//        }
//        else if(newArrary[x] == num)
//        {
//                a.push(newArrary[x]);

//                if(x == newArrary.length - 1)
//                {

//                    result.push(a);
//                }
//             }
//        console.log(a);

//     }
//     console.log(result);
// for (let j = 0; j < result.length; j++)
// {

//     if(result[j].length > 2){
//     result[j][2] ="[";
//     result[j].push(result[j][1])
//     result[j].push("]")
//     counter++;
//     }
// }
//     console.log(result)
//     let r =result.join("").replace(/,/g,"")+","+counter;

// return r;
// }
// console.log(repeat(""));

