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


  if (str.trim().length === 0) {
    return false
  }

  words = str.split(" ");
 

  words = words.sort((a, b) => b.length - a.length);
  console.log(words);
  
  return words[0]

}

console.log(
  findLongestWord(
    "Hello my name is Bhavya Khatri and I'm a frontend developer, currently I am practice JavascriptChallengeDay1."
  )
);

/*
 return words.reduce((accumulator, currentValue) => {
     currentValue.length > accumulator.length ? currentValue : accumulator
    }, "")

*/
