/* Helper function to find the pivot index */

/* PSEUDOCODE
It will accept 3 args, arr, start index which is 0, end index which is arr.length-1
Grap pivot index from start of array
Store pivot in a variable(swapIdx) - this will keep track of where the pivot should end up
Loop the array from start till end
  - If pivot > current element(i+1), increment pivot Index (swapIdx), then swap current element(i+1) with pivot index(swapidx)
Swap the starting element(pivot) with the pivot index
Return the pivot index
*/


function pivot(arr, start=0, end=arr.length-1){
    //swap helper
    function swap(array, i, j){
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    var pivot = arr[start] // assuming pivot is always the first element
    var swapIdx = start

    for(var i=start+1; i<arr.length; i++){
        console.log(arr)
        if(pivot > arr[i]){
            swapIdx++
            swap(arr,swapIdx,i);
        }
    }
    swap(arr, start, swapIdx) // swap pivot with the last swapped value i.e., swapIdx
    console.log(arr)
    return swapIdx;
}

pivot([4,8,2,1,5,7,6,3])

// [4, 8, 2, 1, 5, 7, 6, 3]
// [4, 2, 8, 1, 5, 7, 6, 3]
// [4, 2, 1, 8, 5, 7, 6, 3]
// [4, 2, 1, 8, 5, 7, 6, 3]
// [4, 2, 1, 8, 5, 7, 6, 3]
// [4, 2, 1, 8, 5, 7, 6, 3]
// [4, 2, 1, 3, 5, 7, 6, 8]

// [3, 2, 1, 4, 5, 7, 6, 8] swapping pivot index with last swapped value
