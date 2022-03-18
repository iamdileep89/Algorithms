// collect odd values in a given list of values

function collectOddValues(arr){
    let result = [] //to store list of odd values

    function helper(helperInput){
        if(helperInput.length ===0){
            return;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)
    return result;
}

collectOddValues([1,2,3,4,5,6,7,7,8])