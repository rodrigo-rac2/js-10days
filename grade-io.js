const io = require('console-read-write');

function getGrade(score) {
  let grade;
  if (score <= 30 && score > 25) {
    grade = 'A';
  } else if (score <= 25 && score > 20) {
    grade = 'B';
  } else if (score <= 20 && score > 15) {
    grade = 'C';
  } else if (score <= 15 && score > 10) {
    grade = 'D';
  } else if (score <= 10 && score > 5) {
    grade = 'E';
  } else if (score <= 5 && score >= 0) {
    grade = 'F';
  } else {
    grade = "Invalid score";
  }

  return grade;
}

const main = async () => {
  while (true) {
    // Read inputs
    io.write('Enter the score to get the grade: (\'X\' to eXit)');
    const score = await io.read();
    if(score.toLowerCase() === 'x')
      break;
    io.write('Grade is:');
    console.log(getGrade((score)))
  }
  io.write('Thank you!');
}

main();