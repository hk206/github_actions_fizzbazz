module.exports = function fizzbuzz(value) {
  if (value % 15 === 0) {
      return "FizzBuzz";
  }
  if (value % 2 === 0) {
      return "Fizz";
  }
  if (value % 5 === 0) {
      return "Buzz";
  }
  return String(value);
  
};