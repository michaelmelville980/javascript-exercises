const getTheTitles = function(input = []) {

    let books = [];
    let temp = input;
    temp.reverse();

    while (temp.length > 0){
        books.push(temp.pop().title);
    }
    
    return books;
};

// Do not edit below this line
module.exports = getTheTitles;
