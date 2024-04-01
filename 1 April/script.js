/*

Statement: Hash Tag Generator

You are required to implement a function generatorHash that generates a hash tag from a given input string.

The hash tag should be constructed as follows:

1. The input string should be converted to a hash tag format, where each word is capitalized and concatenated
together without spaces.

2. If the length of the input string is grater than 280 characters or of the input string is empty or contains only whitespace,
the function should return false.

3. Otherwise, the function should return the generated hash tag prefixed with #.

🚀 Write a function generateHash to accomplish this task.


*/

function generateHash(str) {
  if (str.trim() === "" || str.length > 280) {
    return false;
  }

  // let hashtag = str.toUpperCase().replace(/\s+/g, "");  // Every char should be in upperCase

  const words = str.split(" ");

  const hashTag = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  // console.log(hashTag);

  return "#" + hashTag;

  //return hashtag;
}

console.log(generateHash("my name is bhavya khatri"));
