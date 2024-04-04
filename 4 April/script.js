/*

Problem: Count occurrences of character

Task:- Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified
       character appears in the string.

 
 To-do constraints:- 

 - The function should be case-sensitive => Either lowerCase or UpperCase
 - The function should handle both lowercase and uppercase characters
 - The character parameter can be any printable ASCII character ( The function should accept any character that is part of the ASCII character set and is printable. )

*/

// Approach:-1

function countChar(str, char) {
  str = str.toUpperCase();
  char = char.toUpperCase();

  totalCount = str.split("").reduce((accum, currChar) => {
    if (currChar === char) {
      accum++;
    }
    return accum;
  }, 0);
  //  console.log(totalCount);

  return totalCount;
}

console.log(countChar("MissIssippi", "I")); // output 4
