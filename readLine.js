const io = require('console-read-write');

async function main() {
  // Simple readline scenario
  io.write('I will echo whatever you write!');
  io.write(await io.read());

  // Simple question scenario
  io.write(`hello ${await io.ask('Who are you?')}!`);

  // Since you are not blocking the IO, you can go wild with while loops!
  let saidHi = false;
  while (!saidHi) {
    io.write('Say hi or I will repeat...');
    let typed = await io.read()
    io.write('You said: ' + typed)
    saidHi = await typed === 'hi';
  }

  io.write('Thanks! Now you may leave.');
}

main();