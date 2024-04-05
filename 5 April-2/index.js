// Without using sort() property

const sortAscending = (arr) => {
  // Create a new array to keep the original array unchanged

  const sortedArray = arr.slice();
  const n = sortedArray.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        const temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }

  return sortedArray;
};

console.log(sortAscending([5, 3, 1, 8]));
console.log(sortAscending([5, 3, 10, 8]));
console.log(typeof sortAscending[2]);
