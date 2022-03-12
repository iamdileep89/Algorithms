// search a substring in a given string


/* 
Loop over long string
Loop over short string
if characters dont match, break out of inner loop
if characters match, keep going
if you complete inner loop and find a match, increment the count
return the count
*/

function naiveSearch(long, short){
    var count =0;
    for(var i =0; i< long.length; i++){
        for(var j=0; j<short.length; j++){
            if(short[j] !== long[i+j]) break;
            if(j==short.length-1) count++
        }
    }
    return count;
}

naiveSearch('who is the who of done','who')