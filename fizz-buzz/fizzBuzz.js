/**
 * For multiples of three return “Fizz”.
 * For multiples of five return “Buzz”.
 * For numbers which are multiples of both three and five return “FizzBuzz”.
 * Otherwise return the number.
 *
 * @param {number} num The number to check
 * @returns {(number|string)} "Fizz", "Buzz", "FizzBuzz" or the number.
 */
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  else if (num % 3 === 0) return 'Fizz';
  else if (num % 5 === 0) return 'Buzz';
  return num;
}

// FizzBuzz
console.log(fizzBuzz(30));

// 11
console.log(fizzBuzz(11));
