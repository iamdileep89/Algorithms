/* PSEUDOCODE
Break up arr into halves until you have arrays that are empty or have one element
Once you have the smaller sorted arrays, merge those arrays with other sorted arrays untill you are back at the full lenght of the array
Once the array has been merged back together, return the merged/sorted array
We use recursion to acheive this
*/


/* TIME COMPLEXITY
Best - O(nlogn)
Worst - O(nlogn)
Average - O(nlogn)
Space Complexity - O(n)

for an array of 8 elements, it takes 3 level of splits - 2^3
for an array of 16 elements, it takes 4 level of splitting - 2^4 
for an array of 32 elements, it takes 5 level of splitting - 2^5
This relationship gives us - if n grows, no of splitting grows at logn
so which is -- O(logn)

But to merge the splitted arrays, there will be n comparision for each split to merge them -- O(n)

Hence combinedly -- O(nlogn)
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


function mergeSort(arr){
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right);
}

mergeSort([10,24,76,73,72,1,9])