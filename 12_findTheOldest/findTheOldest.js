const findTheOldest = function(input = []) {
    
    let i = 1;
    let indexOfOldest = 1;
    
    let oldestPersonAge = input[i - 1].yearOfDeath - input[i - 1].yearOfBirth;
    
    while (i < input.length){
        let age = input[i].yearOfDeath - input[i].yearOfBirth;
        if (age > oldestPersonAge){
            oldestPersonAge = age;
            indexOfOldest = i;
        }
        i++;
    }
    return input[indexOfOldest];
};

// Do not edit below this line
module.exports = findTheOldest;
