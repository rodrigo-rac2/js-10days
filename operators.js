const io = require('console-read-write');

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area = length*width;
    
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter = 2 * (length+width);
    
    return perimeter;
}

async function main() {
  // Read inputs
  io.write('Enter the length of the rectangle:');
  const length = await io.read();

  io.write('Enter the width of the rectangle:');
  const width = await io.read();

  io.write('The area is:');
  console.log(getArea(length, width));

  io.write('The perimeter is:');
  console.log(getPerimeter(length, width));
}

main();