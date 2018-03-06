import { expect } from 'chai';
import fizzBuzz from '../fizz-buzz/fizzBuzz';

describe('Fizz Buzz', () => {
  it('Returns "Fizz" if is divisible by 3', () => {
    expect(fizzBuzz(33)).to.equal('Fizz');
  });
  it('Returns "Buzz" if is divisible by 5', () => {
    expect(fizzBuzz(50)).to.equal('Buzz');
  });
  it('Returns "FizzBuzz" if is divisible by 3 and 5', () => {
    expect(fizzBuzz(30)).to.equal('FizzBuzz');
  });
  it('Returns the number if is not divisible by 3 or 5', () => {
    expect(fizzBuzz(11)).to.equal(11);
  });
});
