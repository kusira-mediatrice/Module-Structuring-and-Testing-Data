function formatAs12HourClock(time) {
  let dayTime = Number(time.slice(0, 2)); // Get the hour part from the input i.e "19:30" will be "19" and convert it to number 19
  let dayMinute = time.slice(2); // Get the minute part from the input i.e ":30"

  // console.log(`${dayTime}`);

  if (dayTime > 12) {
    // condition if the hour part is greater than 12 i.e afternoon time 19 > 12 : true
    let afternoonTime = dayTime - 12; // substrat 12 hour dayTime 19 -12 : 7
    afternoonTime = afternoonTime.toString().padStart(2, "0"); // Get the afternoon time on 2 characters by padding 0 at the start i.e 07
    return `${afternoonTime}${dayMinute} pm`; // concatenate the all with pm
  }
  return `${time} am`;
}

let currentOutput = formatAs12HourClock("08:00");
let targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

currentOutput = formatAs12HourClock("00:00");
targetOutput = "00:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

currentOutput = formatAs12HourClock("17:22");
targetOutput = "05:22 pm";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

currentOutput = formatAs12HourClock("19:00");
targetOutput = "07:00 pm";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
