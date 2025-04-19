const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arrayOfNumbers) {
  let sum = 0;
  for (entry of arrayOfNumbers){
    sum += entry;
  }
  return sum;
};

const multiply = function(arrayOfNumbers) {
  let product = arrayOfNumbers[0];
  for (let i = 1; i < arrayOfNumbers.length; i++){
    product *= arrayOfNumbers[i];
  }
  return product;
};

const power = function(base, exponent) {
  let ans = 1;
  for (let i = 1; i <= exponent; i++){
    ans *= base;
  }
  return ans;
};

const factorial = function(base) {
  let ans = 1;
  for (let i = base; i > 1; i--){
    ans *= i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
