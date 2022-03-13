/*
start looping with i from end of array towards beginning
start an inner loop with j from beginning to until i-1
if arr[j]>arr[j+1] swap the values
return sorted array

Here we are reducing number of loops since the last value in array in each loop is a sorted item, hence need to loop the entire array again.
we need to loop array without the last item hence taking as j=i-1
*/

/* 
TIME COMPLEXITY
  BestCase - O(n) if the array is already nearly sorted
  AverageCase - O(n^2)
  WorstCase - O(n^2)
SPACE COMPLEXITY - O(1)
*/



// es15 syntax
// function bubbleSort(arr){
//     var noSwaps
//     for(var i=arr.length; i>0; i--){
          // noSwaps = true
//         for(var j=0; j<i-1; j++){
//             console.log(arr, arr[j], arr[j+1])
//             if(arr[j]>arr[j+1]){
//                 //swap
//                 var temp = arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
                  // noSwaps = false
//             }
          
//         }
            // if(noSwaps) break
//         console.log("One round completes")
//     }
//     return arr
// }


//ES6 syntax
function bubbleSort(arr){
    let noSwaps;
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for(let i=arr.length; i>0; i--){
        noSwaps = true
        for(let j=0; j<i-1; j++){
            console.log(arr, arr[j], arr[j+1])
            if(arr[j]>arr[j+1]){
                swap(arr, j, j+1)
                noSwaps = false
            }
        }
        if(noSwaps) break
        console.log("One round completes")
    }
    return arr
}


bubbleSort([37,45,78,23,13])