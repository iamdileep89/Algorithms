// write a function to find base to the exp i.e., power of value of given n power

function power(base, exp){
    if(exp==0) return 1
    console.log(base, exp)
    return base*power(base, exp-1)
}

power(2,5)