/*Merge sorted arrays*/

/* PSEUDOCODE
Create an empty array, take a look at smallest values in each arr
While there are still values available in each array
  - If the value in 1st arr is smaller than value in 2nd arr, push the value of 1st arr into result arr
  - If the value in 1st arr is larger than value in 2nd arr, push the value of 2nd arr into result arr
  - If any values left in each of the array, loop them to add those directly into the result array, since arr1 and arr2 are already sorted
*/



function merge(arr1, arr2){
    var result=[]
    let i=0;
    let j=0
    while(i<arr1.length && j<arr2.length){
        if(arr2[j]>arr1[i]){
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        result.push(arr2[j])
        j++
    }
    return result
}


merge([1,10,50],[2,14,99,100])