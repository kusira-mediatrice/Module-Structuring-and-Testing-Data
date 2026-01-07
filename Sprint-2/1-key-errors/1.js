// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
convertToPercentage(decimalNumber);

// =============> write your explanation here
//because thr variable decimalNumber has already been declared as the parametter of the function capitalise
//               we can never declaire twice avariable and also decimalNumber can not be use at the line 15 in
//the console.log without being declare in that scope.

// Finally, correct the code to fix the problem
let decimalNumber = 0.5;
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(convertToPercentage(decimalNumber));
