const fibonacci = function(member) {
    let array = [1,1];
    let result;
    
    if (array.length >= member){
        result = array[member - 1];
    }else{
        while (array.length < member){
            array.push(array[array.length - 1] + array[array.length - 2]);
        }
        result = array[member - 1];
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
