const io = require('console-read-write');

function getLetter(s) {
  let letter;
  // Write your code here
  switch (s[0]) {
    case 'a':
      letter = 'A';
      break;
    case 'e':
      letter = 'A';
      break;
    case 'i':
      letter = 'A';
      break;
    case 'o':
      letter = 'A';
      break;
    case 'u':
      letter = 'A';
      break;
    case 'b':
      letter = 'B';
      break;
    case 'c':
      letter = 'B';
      break;
    case 'd':
      letter = 'B';
      break;
    case 'f':
      letter = 'B';
      break;
    case 'g':
      letter = 'B';
      break;
    case 'h':
      letter = 'C';
      break;
    case 'j':
      letter = 'C';
      break;
    case 'k':
      letter = 'C';
      break;
    case 'l':
      letter = 'C';
      break;
    case 'm':
      letter = 'C';
      break;
    default:
      letter = 'D';
      break;
  }
  return letter;
}

const main = async () => {
  while (true) {
    // Read inputs
    io.write('Enter the letter: (\'0\' to exit)');
    const s = await io.read();
    if (s.toLowerCase() === '0')
      break;
    io.write('GetLetter Result:');
    console.log(getLetter((s)))
  }
  io.write('Thank you!');
}

main();