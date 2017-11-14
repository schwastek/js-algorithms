/** @module */

/**
 * Get a random integer between two values, inclusive.
 * @example
 * // generate random integer between 1 and 100
 * const random = getRandomIntInclusive(1, 100);
 * // returns e.g. 85
 * console.log(random);
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive Getting a random integer between two values, inclusive}
 * @param {Number} min The smallest value that can be generated
 * @param {Number} max The largest value that can be generated
 * @returns {Number} Random integer between the specified values.
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

/**
 * A comparison function that defines the sort order.
 * Used as parameter for the `sort()` method.
 * @static
 * @example
 * import { compareNumbers } from './utilites';
 * const numbers = [4, 2, 5, 1, 3];
 * numbers.sort(compareNumbers);
 * // [1, 2, 3, 4, 5]
 * console.log(numbers);
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort Compare numbers}
 * @param {Number} a The first element to compare
 * @param {Number} b The second element to compare
 * @returns Greater than 0 if `a` is greater than `b`, 0 if `a` eqauls `b` or
 * less than 0 if `a` is less than `b`.
 */
function compareNumbers(a, b) {
  return a - b;
}

/**
 * Create an array of integers with a fixed size where each integer is between
 * two values (inclusive).
 * @static
 * @example
 * import { generateArrayIntegers } from './utilites';
 * // create an array of 5 elements which values are between 1 and 5
 * const generated = generateArrayIntegers(5, 1, 5);
 * // returns e.g. [1, 1, 5, 5, 1]
 * console.log(generated);
 * @param {Number} length Size of the array
 * @param {Number} min The smallest integer
 * @param {Number} max The largest integer
 * @returns Array of specified size with integers between `min` and `max`.
 */
function generateArrayIntegers(length, min, max) {
  return Array.from({ length }, () => getRandomIntInclusive(min, max));
}

export {
  compareNumbers,
  generateArrayIntegers,
};
