/*
Write recursive functio which acceps arr and callback.
Function returns true when callback returns true which each value in array is passed to it
*/

function someRecursive(arr, callback){
    if(arr.length==0) return false
    if(callback(arr[0])) return true
    return someRecursive(arr.slice(1),callback);
}