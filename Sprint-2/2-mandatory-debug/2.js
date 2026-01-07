// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here     All the last digit will be 3,the code compilie and print 3 for
//all function call because the function does not take the paramether and use the value of the declared
// variable num

// Now run the code and compare the output to your predictionS
// =============> write the output here
//kusira@AX15:/mnt/c/MCB/Module-Structuring-and-Testing-Data/sprint-2/2-mandatory-debug$ node 2.js
//The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here    because the function does not take the paramether and use the value of the declared
// variable num
// Finally, correct the code to fix the problem
// =============> write your new code here
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
function getLastDigit1(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit1(42)}`);
console.log(`The last digit of 105 is ${getLastDigit1(105)}`);
console.log(`The last digit of 806 is ${getLastDigit1(806)}`);
