// write a function to calculate sum of numbers with in given range n recursively


function sumRange(n){
    if(n==1) return 1
    return n+sumRange(n-1)
}

sumRange(10)