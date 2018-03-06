/** @module */

/**
 * For multiples of three return “Fizz”.
 * For multiples of five return “Buzz”.
 * For numbers which are multiples of both three and five return “FizzBuzz”.
 * Otherwise return the number.
 * @static
 * @example
 * import fizzBuzz from '../fizz-buzz/fizzBuzz';
 * // "FizzBuzz"
 * fizzBuzz(30);
 * // 11
 * fizzBuzz(11);
 * @param {number} num The number to check
 * @returns {(number|string)} "Fizz", "Buzz", "FizzBuzz" or the number.
 */
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  else if (num % 3 === 0) return 'Fizz';
  else if (num % 5 === 0) return 'Buzz';
  return num;
}

export default fizzBuzz;
