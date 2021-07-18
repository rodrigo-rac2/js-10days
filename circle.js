const io = require('console-read-write');

const main = async () => {
  const PI = Math.PI;

  // Read inputs
  io.write('Enter the radius of the circumference:');
  const radius = await io.read();

  io.write('Area is:');
  console.log(PI * radius * radius)

  io.write('Perimeter is:');
  console.log(2* PI * radius)

  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}

main();