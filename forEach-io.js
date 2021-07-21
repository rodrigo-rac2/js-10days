const io = require('console-read-write');

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
const vowelsAndConsonants = (s) => {
  const sArr = [...s];
  sArr.forEach(c => {
      if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u')
      io.write(c);
  });
  sArr.forEach(c => {
      if (c !== 'a' && c !== 'e' && c !== 'i' && c !== 'o' && c !== 'u')
      io.write(c);
  });
}

const main = async () => {
  while (true) {
    // Read inputs
    io.write('Enter the string: (\'0\' to exit)');
    const s = await io.read();
    if (s.toLowerCase() === '0')
      break;
    io.write('Showing vowels first, then consonants:');
    vowelsAndConsonants(s);
  }
  io.write('Thank you!');
}

main();