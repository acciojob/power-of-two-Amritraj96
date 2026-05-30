function isPowerOfTwo(number) {
  // Use a standard function declaration to prevent re-declaration errors in Cypress
  return number > 0 && (number & (number - 1)) === 0;
}

const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));