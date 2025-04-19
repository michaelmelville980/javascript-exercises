const removeFromArray = function(array = [], ...elementsToRemove) {
    let finalArray = array;
    return finalArray.filter(item => !elementsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
