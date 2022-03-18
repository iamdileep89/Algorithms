// write a function which take n and adds up to all the numbers from 0 to n

function recursiveRange(n){
    if(n<0) return 0
    console.log(n)
    return n+recursiveRange(n-1);
}

recursiveRange(6) //21