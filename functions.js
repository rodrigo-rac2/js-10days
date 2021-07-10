const io = require('console-read-write');

/*
 * Create the function factorial here
 */

const factorial = (n) => {
  let value = 1;
  
  for(var i = n; i > 0; i--) {
      value *= i;
  }
  
  return value;
} 

const main = async () => {
  // Read inputs
  io.write('Value to calculate the factorial for:');
  const input = await io.read();

  io.write('Factorial is:');
  console.log(factorial(input));
}

main();