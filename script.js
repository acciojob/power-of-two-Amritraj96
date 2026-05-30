const isPowerOfTwo = (number) => {
  //your code here
};

const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));
const isPowerOfTwo = (number) => {
  // 1. 'number > 0' ensures we filter out 0 and negative numbers.
  // 2. '(number & (number - 1)) === 0' checks the bitwise property of powers of two.
  return number > 0 && (number & (number - 1)) === 0;
};

const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));