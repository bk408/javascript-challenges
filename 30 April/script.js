/* Write a function to determine whether a given string is a palindrome or not. A palindrome is a word, phrase.
 number, or other sequence or characters thar reads the same forward and backward, ignoring spaces, punctuation, and capitalization
 */


// Constraints:

/*
1. The input string may contain letters, digits, spaces, punctuation, and special characters.

2. The function should not be case-sensitive

3. Ignore spaces, punctuation, and special characters when determining if a string is a palindrome

4. The function should return true if the input string is a palindrome and false otherwise.

*/


const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/\W/g, "");
    let reverseString = str.split("").reverse().join("")
    console.log(reverseString);
    return str === reverseString ? true : false;
}
 


console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));