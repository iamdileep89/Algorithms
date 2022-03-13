
/*
Builds up the sort by gradually creating a larger left half which is always sorted
*/

/* PSEUODO CODE
Start by picking the second element in arr
Now compare the second element with the once before it and swap if necessary
Continue to the next element and if it is in incorrect order iterated through the sorted portion(i.e., the left side) to place the element in correct place
Repeat until the arr is sorted
*/


/* 
TIME COMPLEXITY
  BestCase - O(n) if the array is already nearly sorted
  AverageCase - O(n^2)
  WorstCase - O(n^2)
SPACE COMPLEXITY - O(1)
*/

function insertionSort(arr){
    for(var i=1; i<arr.length; i++){
        console.log('current arr: ', arr)
        var currentVal = arr[i]
        for(j=i-1; j>=0 && arr[j]>currentVal; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
        console.log('sorted arr: ',arr)
    }
    return arr
}

insertionSort([2,1,9,76,4])

// current arr: [2, 1, 9, 76, 4]
// sorted arr: [1, 2, 9, 76, 4]
// current arr: [1, 2, 9, 76, 4]
// sorted arr: [1, 2, 9, 76, 4]
// current arr: [1, 2, 9, 76, 4]
// sorted arr: [1, 2, 9, 76, 4]
// current arr: [1, 2, 9, 76, 4]
// sorted arr: [1, 2, 4, 9, 76]