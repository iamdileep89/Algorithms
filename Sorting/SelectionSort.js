/*
Similar to bubble , but instead of first placing larger values into sorted postion, it places smaller values into sorted position
*/


/* PSEUODO CODE
Store the first element as the smallest value(lowest)
Compare this lowest to the next item in the array untill you find the smaller number
If smaller num found, assign this new smaller num to lowest
If lowest is not the value(i) you initially began with, swap the two values
Repeat this with next element in next loop until the array is sorted
*/


/*
works well if we need minimum swaps
*/

/* 
TIME COMPLEXITY
  BestCase - O(n^2) if the array is already nearly sorted
  AverageCase - O(n^2)
  WorstCase - O(n^2)
SPACE COMPLEXITY - O(1)
*/


function selectionSort(arr){
    for(var i=0; i<arr.length; i++){
        var lowest = i
        for(var j=i+1; j<arr.length; j++){ // j=i+1 since we are comparing i with next element
            if(arr[j]<arr[lowest]){
                lowest = j;
            }
        }
        if(i!=lowest){
            var temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    return arr;
}

selectionSort([34,22,10,19,17])
// i, j, lowest
// 0, 1, 1
// 0, 2, 2
// 0, 3, 2
// 0, 4, 2


selectionSort([0,2,34,22,10,19,17])
//for 0 and 2, i is not equal to lowest, so need of swap for 0 and 2 and last element 17