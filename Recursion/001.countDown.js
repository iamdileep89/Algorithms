// write a function to print numbers from 0 to n recursively manner


function countDown(n){
    if(n<0){
        console.log("All Done")
        return;
    }
    console.log(n)
    n--
    countDown(n)
}

countDown(10)
