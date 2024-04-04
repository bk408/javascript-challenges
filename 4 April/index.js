// Approach:-2

function countChar(str, char) {
  str = str.toLowerCase();
  char = char.toLowerCase();

  // Initialize a variable to count occurrences

  let count = 0;

  // Loop through string

  for (let i = 0; i < str.length; i++) {
    // If the current character matches the specified character, increment count

    if (str[i] === char) {
      count++;
    }
  }

  // return the count

  return count;
}

console.log(countChar("Bhavya Khatri loves AusTraLia", "a")); // output 6
