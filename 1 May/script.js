/*
Write a function findMax that takes an array of numbers as input and returns the 
maximum number in the array
*/

// Method 1 using Math
/*function findMax(arr) {
    if (arr.length === 0) {
        console.log("Array is empty");
    }

    return Math.max.apply(null, arr)
}


console.log(findMax([1, 5, 3, 9, 2]));
console.log(findMax([-10, -5, -3, -9, -2]));
console.log(findMax([5])); */

// Method 2 using reduce
/*function findMax(arr) {
  if (arr.length === 0) {
    console.log("Array is empty");
  }

  return arr.reduce((a, b) => {
    return a > b ? a : b;
  });
}

console.log(findMax([1, 5, 3, 9, 2]));
console.log(findMax([-10, -5, -3, -9, -2]));
console.log(findMax([5])); */

// Method 3 using sort
function findMax(arr) {
  if (arr.length === 0) {
    console.log("Array is empty");
  }

  arr.sort((a, b) => b - a);
  return arr[0];
}

console.log(findMax([1, 5, 3, 9, 2]));
console.log(findMax([-10, -5, -3, -9, -2]));
console.log(findMax([5]));
