const repeatString = function(string, numRepeats) {
    output = string;
    for (let i = 1; i < numRepeats; i++){
        output += string;
    }
    return output;
};

console.log(repeatString ("Dog", 3))

// Do not edit below this line
module.exports = repeatString;
