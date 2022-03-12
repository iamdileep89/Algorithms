// It is for only sorted arrays or list
// much faster form of search
// rather than eliminating one at a time, we can eleminate half if the items at once

//------------------------------------------------------------
// TIME COMPLEXITY

// As length of array growns, time complexity grows
// Worst and Average case O(log n)
// Best case O(1)

//------------------------------------------------------------
// It follows DIVIDE & CONQUER Pattern

//------------------------------------------------------------
// PSEUDOCODE 
// Create a left pointer at start of array
// create a right pointer at end of array
// while left comes before the right pointer
// create a pointer in middle
// if you find the value in middle, return the index of middle
// if the value is too small, move left pointer up
// if the value is too large, move the right pointer down
// if you never find the value return -1


function binary_search(arr, elem){
    var start = 0;
    var end = arr.length-1
    var middle = Math.floor((start+end)/2);
    

    while(arr[middle]!==elem && start <= end){
//         console.log(start, middle, end)
        if(elem<arr[middle]){
            end = middle-1
        } else {
            start = middle+1
        }
        middle = Math.floor((start+end)/2);
    }
//     console.log(start,middle, end)

    if(arr[middle] == elem){
        return middle
    } else {
        return -1; 
    } 
}

binary_search([2,4,5,6,8,9,11,14,18,24,34,55,67], 67)




// For 16 elements it take 4 steps
// For 32 elements it takes 5 steps

// which is 2^4 = 16
// which is 2^5 = 32

// for every double the size of array, we are adding extra step here
// hence log 4 to the base 2
// hence log 5 to the base 2