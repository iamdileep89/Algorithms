function factorial(n){
    let total = 1;
    for(let i =n; i>0; i--){
        total*=i
    }
    return total
}

factorial(5)