capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst(arr){
   let newArr = []
   if(arr.length > 0){
       newArr.push(arr[0][0].toUpperCase()+arr[0].slice(1))
       newArr = newArr.concat(capitalizeFirst(arr.slice(1)))
       console.log(newArr)
   }
   return newArr;
}