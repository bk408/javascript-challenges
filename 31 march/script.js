/* Q. Write a function Find longest word that takes a string as input and returns the longest word in the string. 
If there are multiple longest words, return the first one encountered 


Constraints:- 
1. The input string may contain alphabetic characters, digits, spaces and punctuation.
2. The input string is non-empty
3. The input string may contain multiple words separated by spaces.

Note:- 
1. If the inout string is empty or contains only whitespace, the function should return false.
2. The function should ignore leading and trailing whitespace when determining the longest word.



*/

function findLongestWord(str) {
  if (str.trim() === 0) {
    return false;
  }

  const words = str.split(" ");
  console.log(words);

  /* return words.reduce((accumulator, currentValue) => {
     return currentValue.length > accumulator.length ? currentValue : accumulator
    }, "");  */

  return words.reduce(
    (accumulator, currentValue) =>
      currentValue.length > accumulator.length ? currentValue : accumulator,
    ""
  );
}

console.log(
  findLongestWord(
    "Lorem ipsum dolor sit amet consecteturahr consecteturash elit. Aut aperiam earum culpa."
  )
);

/*
 return words.reduce((accumulator, currentValue) => {
     currentValue.length > accumulator.length ? currentValue : accumulator
    }, "")

*/
