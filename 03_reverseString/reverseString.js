const reverseString = function(inputString = "") {
    let reversed = "";
    for (let i = inputString.length; i > 0; i--){
        reversed += inputString[i - 1];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
