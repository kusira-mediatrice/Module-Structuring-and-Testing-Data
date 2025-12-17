const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1); Initialise the string variable with
// the  expession "399p".substring(0,4-1) that is"399"

//3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); Initialise the string variable with
// the expression "399".padstar(3,"0") that is "399" since the padding does not have any effect on the string
//the length is already 3

//4.const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2); Initialise the string variable with
// the  expession "399".substring(0,3-2) that is"3"

//5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); Initialise the string variable with
// the  expession "399".substring(3-2) that is"99"Also here the padding does not have an effect
//console.log(`£${pounds}.${pence}`); =£3.99
