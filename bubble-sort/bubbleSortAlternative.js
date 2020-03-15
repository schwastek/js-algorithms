/**
 * Sorts an array of integers using bubble sort.
 *
 * @param {number[]} array The array of integers
 * @returns {number[]} Sorted array.
 */
function bubbleSort(array) {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

// [-84, -73, -63, -8, 66]
const result = bubbleSort([-63, -73, 66, -84, -8]);
console.log(result);
