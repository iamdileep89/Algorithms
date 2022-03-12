// A straight forward search
// length of array grows, timecomplexity grows O(n)

// it is BIG O
// Best case O(1) if we are searching for 1st item
// Worst case O(n) if we are searching for last item
// Average case O(n) if we search for any random element

function linearSearch(arr, elem){
    for(var i=0; i<arr.length; i++){
        if(arr[i]==elem){
            return i
        }
    }
    return -1;
}

linearSearch([1,2,4,6,7,9], 6)