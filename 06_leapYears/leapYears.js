const leapYears = function(year = 0) {
    const isDivFour = (year % 4 === 0);
    const isDivHundred = (year % 100 == 0);
    const isDivFourHundred = (year % 400 == 0);

    return (isDivFour && !isDivHundred) || (isDivHundred && isDivFourHundred);
};

// Do not edit below this line
module.exports = leapYears;
