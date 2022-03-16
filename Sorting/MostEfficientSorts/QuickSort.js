/* PSEUDOCODE
Call pivot helper on the array
When helper returns the updated index(pivot index), recursively call quickSort function on the subarray to the left of that pivot index and subarray to the right of that pivot index.
Your base case occurs when you consider a subarray with less than 2 elements
*/


/* TIME COMPLEXITY
Best Case - O(nlogn) - same as Merge sort it also has n comparisons for log(n) decompostions since we are picking pivot as 1st element. nlogn-decompostions, n-comparisions
Worst Case - O(n^2) - when the array is already sorted, we take pivot as first element which is minimum element, hence we need n*n comparisions. n-decomposition, n-comparisions
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
        if(pivot > arr[i]){
            swapIdx++
            swap(arr,swapIdx,i);
        }
    }
    swap(arr, start, swapIdx) // swap pivot with the last swapped value i.e., swapIdx
    return swapIdx;
}


function quickSort(arr, left=0, right=arr.length-1){
    if(left<right){
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex-1)
        //right
        quickSort(arr, pivotIndex+1, right)
    }
    return arr;
}

quickSort([100,-3,2,4,6,9,1,2,5,3,23])