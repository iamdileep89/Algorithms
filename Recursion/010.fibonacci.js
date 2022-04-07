// find the nth fibonacci number

// The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

function fib(n){
    if(n<=2) return 1
    return fib(n-1)+fib(n-2)
}

fib(10) // 55
fib(4) //3