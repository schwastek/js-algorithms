/**
 * Binary search is an efficient algorithm for finding an item from a sorted list of items.
 * It works by repeatedly dividing in half the portion of the list that could contain the item,
 * until you've narrowed down the possible locations to just one (description from: Khan Academy).
 *
 * @param {number[]} haystack The sorted array of integers.
 * @param {number} key The item to be found.
 * @returns {boolean} True, if item was found.
 */
function binarySearch(numbers, key) {
  let minIndex = 0;
  let maxIndex = (numbers.length - 1);
  let middleIndex;
  let currentItem;

  while (minIndex <= maxIndex) {
    middleIndex = Math.floor((minIndex + maxIndex) / 2);
    currentItem = numbers[middleIndex];

    // console.log(`Currently looking between ${numbers[minIndex]} and ${numbers[maxIndex]}`);

    if (currentItem < key) {
      // Go search the right side
      minIndex = middleIndex + 1;
    } else if (currentItem > key) {
      // Go search the left side
      maxIndex = middleIndex - 1;
    } else {
      return true;
    }
  }

  return false;
}

// true
const result = binarySearch([1, 2, 3, 4, 5], 4);
console.log(result);
