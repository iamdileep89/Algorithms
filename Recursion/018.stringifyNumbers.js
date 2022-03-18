
function stringifyNumbers(obj){
    for(var key in obj){
        if(typeof obj[key] == 'object'){
            obj[key] = stringifyNumbers(obj[key])
        } else if(typeof obj[key] == 'number'){
            obj[key] = obj[key].toString()
        }
    }
    return obj;
}


let object = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(object)