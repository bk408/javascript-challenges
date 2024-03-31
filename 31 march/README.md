# Problem Statement

Q. Write a function Find longest word that takes a string as input and returns the longest word in the string.
If there are multiple longest words, return the first one encountered

Constraints:-

1. The input string may contain alphabetic characters, digits, spaces and punctuation.
2. The input string is non-empty
3. The input string may contain multiple words separated by spaces.

Note:-

1. If the input string is empty or contains only whitespace, the function should return false.
2. The function should ignore leading and trailing whitespace when determining the longest word.

# Process

- First we need to remove extra white space using trim()
- write a condition for extra white space which is asking in note.

- For finding longest word we need to convert string into array => for this we use split() method
- After converting into array we need to convert our string into substring of array => (example "Hello I am BK" => "Hello" "I" "am" "BK") : for this we use split(' ')

⭐🚀

- We are can using multiple method to resolve this problem but right now we are using reduce method which is more beneficial as compare to other ones.

- reduce method is used to reduce the elements of an array to a single value. It iterates over each element of the array and applies a callback function (specified by you) to combine them into a single value.

- reduce method takes in a callback function and optional initial value.

- array.reduce(callbackFunction, initialValue)
