const convertToCelsius = function(farenheit) {
  let nonRounded = (farenheit - 32) * (5/9);
  return Math.round(nonRounded * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let nonRounded = (celsius * 9/5) + 32;
  return Math.round(nonRounded * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
