const minimum = 1;
const maximum = 100;

const rand = Math.random(); // is used to get a decimal number between 0 and 1 excluded
console.log("Math.random() =", rand);

const range = maximum - minimum + 1; // to keep a maximum of 100
console.log("maximum - minimum + 1 =", range);

const scaled = rand * range; // is used to multiply by 100 the random number so to have it between 0 and 99
console.log("Math.random() * (maximum - minimum + 1) =", scaled);

const floored = Math.floor(scaled); //is used to returns the greatest integer less than or equal to the scaled value.
console.log("Math.floor(Math.random() * (maximum - minimum + 1)) =", floored);
const shifted = floored + minimum; // is used to have the number at it minimum 1 and  maximum 100 included

console.log(
  "Math.floor(Math.random() * (maximum - minimum + 1)) + minimum =",
  shifted
);

const num = Math.floor(rand * (maximum - minimum + 1)) + minimum; // represents a random integer between the minimum 1 (inclusive) and the maximum 100 (inclusive)
console.log(
  "Math.floor(Math.random() * (maximum - minimum + 1)) + minimum =",
  num
);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
