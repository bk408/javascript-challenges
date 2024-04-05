/*
Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of 
a triangle. The function should return a string indicating the type of triangle:
"equilateral", "isosceles", or "scalene".

To-do the function should adhere to the following rules:
1. If all three sides are of equal length, return "equilateral",
1. If only two sides are of equal length, return "isosceles",
1. If all three sides have different length, return "scalene",

*/

function checkTriangleType(a, b, c) {
  if (a === b && b === c) {
    return "equilateral";
  } else if (a === b || b === c || a === c) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(3, 4, 3));
console.log(checkTriangleType(5, 8, 6));
