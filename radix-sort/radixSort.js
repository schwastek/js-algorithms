/**
 * Sorts an array of positive integers using LSD radix sort.
 *
 * @param {number[]} arr The array of positive integers
 * @returns {number[]} Sorted array.
 */
function radixSort(arr) {
  function countingSort(array, significantDigit) {
    const buckets = [];
    const output = [];
    let i = 0;

    // Create a bucket for each digit
    for (i = 0; i < 10; i += 1) {
      buckets[i] = 0;
    }

    // Count frequencies
    for (i = 0; i < array.length; i += 1) {
      const index = Math.floor((array[i] / significantDigit) % 10);
      buckets[index] += 1;
    }

    /**
     * Sum previous counts (cumulative sum),
     * so `buckets[i]` contains position of `i` digit
     * in the output array.
     */
    for (i = 1; i < 10; i += 1) {
      buckets[i] += buckets[i - 1];
    }

    // Build the output array
    for (i = array.length - 1; i >= 0; i -= 1) {
      const digit = Math.floor((array[i] / significantDigit) % 10);
      output[buckets[digit] - 1] = array[i];
      buckets[digit] -= 1;
    }

    // Copy back
    for (i = 0; i < array.length; i += 1) {
      array[i] = output[i];
    }
  }

  // Find the largest integer to determine the number of digits
  let max = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) max = arr[i];
  }

  // Perform counting sort on each digit, starting at the least significant digit
  let significantDigit = 1;
  while ((max / significantDigit) > 0) {
    countingSort(arr, significantDigit);
    significantDigit *= 10;
  }

  return arr;
}

// [80, 750, 5531, 6274, 8712]
const result = radixSort([750, 5531, 80, 6274, 8712]);
console.log(result);
