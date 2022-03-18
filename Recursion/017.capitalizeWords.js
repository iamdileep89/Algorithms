capitalizeWords(['car','taco','banana']); // ['CAR','TACO','BANANA']

function capitalizeWords(arr){
   let newArr = []
   if(arr.length > 0){
       newArr.push(arr[0].toUpperCase())
       newArr = newArr.concat(capitalizeWords(arr.slice(1)))
       console.log(newArr)
   }
   return newArr;
}