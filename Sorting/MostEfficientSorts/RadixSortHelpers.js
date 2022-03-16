/*
In order to implement Radix sort, we need to build some helper functions first

===== getDigit(num, place) ===> returns the digit in @num at a given @place

getDigit(12345, 0) // 5. ---- 0th postion from last index has 5
getDigit(12345, 1) // 4 ---- 1st position from last index has 4
getDigit(12345, 2) // 3
getDigit(12345, 3) // 2
getDigit(12345, 4) // 1
getDigit(12345, 5) // 0

===== digitCount(num) ==> returns the no of digits in given num

digitCount(1) //1
digitCount(25) //12
digitCount(345) //3

==== mostDigits(nums) ==> Given an array of numbers, returns the no of digits in the largest number in the list

mostDigits([1234,1,23]) //4
mostDigits(1, 1, 11111, 1, 1111111) //7

*/

/*
Math.abs -- to get absolute number --> to get only positive number even if we give negative num
Math.floor -- to round of the decimal points of a number
Math.pow(n,m) -- n power m value
Math.log10(n) -- log of n to the base 10, since we are dealing with base 10 integers 
*/

function getDigit(num, i){
    return Math.floor(Math.abs(num)/Math.pow(10,i)) % 10;
}

function digitCount(num){
    if(num == 0) return 1
    return Math.floor(Math.log10(Math.abs(num)))+1
}

function mostDigits(nums){
    let maxDigits = 0;
    for(let i=0; i<nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}