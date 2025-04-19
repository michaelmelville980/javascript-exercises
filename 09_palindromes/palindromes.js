const palindromes = function (phrase = "") {
    let start = 0;
    let end = phrase.length - 1;
    let isPalindrome = true;

    while (isPalindrome === true && start < end){
        if (phrase.charAt(start) !== phrase.charAt(end)){
            isPalindrome = false;
        }
        start++;
        end--;
    }

    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
