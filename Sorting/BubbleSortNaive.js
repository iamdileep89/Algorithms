/*
start looping from i towards the end of array
start an inner loop j towards the end of array
if arr[j] is > arr[j+1] swap the values
return sorted array
*/



function bubbleSort(arr){
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length; j++){
            if(arr[j]>arr[j+1]){
                //swap
                var temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}



bubbleSort([37,45,78,23,13])