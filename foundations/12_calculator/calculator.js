const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  return nums.reduce((total, num) => total + num, 0);
};

const multiply = function(nums) {
  return nums.reduce((product, num) => product * num);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	if(num == 0)
  {
    return 1;
  }
  else
  {
    let multiplier = num - 1;
    while(multiplier >= 1)
    {
      num *= multiplier;
      multiplier -= 1;
    }
  }

  return num;
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
