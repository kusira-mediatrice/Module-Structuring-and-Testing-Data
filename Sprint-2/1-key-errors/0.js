// Predict and explain first...
//  =============> Code will fail with errors variable srt is already declared

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> because thr variable str has already been declared as the parametter of the function capitalise
//               we can never declaire twice avariable
// =============> write your new code here : str = `${str[0].toUpperCase()}${str.slice(1)}`;
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
let str = "mediatrice";
console.log(capitalise(str));
