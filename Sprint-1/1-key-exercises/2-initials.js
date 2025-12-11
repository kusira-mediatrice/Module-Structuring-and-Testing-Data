let firstName = "Creola"; //declare variable firstName and assign it the string "Creola"
let middleName = "Katherine"; //declare variable middleName and assign it the string "Katherine"
let lastName = "Johnson"; //declare variable lastName and assign it the string "Johnson"

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.
const index = 0;
let initials = `${firstName.charAt(index)}${middleName.charAt(
  index
)}${lastName.charAt(index)}`;
console.log(
  `The initials of ${firstName} ${middleName} ${lastName} are ${initials}`
);
// https://www.google.com/search?q=get+first+character+of+string+mdn
