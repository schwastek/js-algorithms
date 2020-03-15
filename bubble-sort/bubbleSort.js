/**
 * Sorts an array of integers using bubble sort.
 *
 * @param {number[]} array The array of integers
 * @returns {number[]} Sorted array.
 */
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i += 1) {
    let swapped = false;

    for (let j = 0; j < array.length - i - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }

    if (swapped === false) {
      break;
    }
  }

  return array;
}

// [-84, -73, -63, -8, 66]
const result = bubbleSort([-63, -73, 66, -84, -8]);
console.log(result);
