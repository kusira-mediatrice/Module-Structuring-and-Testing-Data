const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60; //146%60=26
const totalHours = (totalMinutes - remainingMinutes) / 60; //(146-26)/60=2

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//Reponse:there are 6 variables declaretions in this program

// b) How many function calls are there?
//Reponse: there is 1 function call at line 19

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//Reponse: It represents the remainder of the division of movieLength by 60 in our case the left over of 8784/60 that is 24s

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//REponse: since we have the remaining second ,by removing it from the MovieLength we obtain the equivalent minute
// by dividing again the result of the susbtraction
// (8784 - 24) / 60 ;
// 8760 / 60 ;
//const totalMinutes =146

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//Reponse :it repreesente the movie duration. Yes movieDuration
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
