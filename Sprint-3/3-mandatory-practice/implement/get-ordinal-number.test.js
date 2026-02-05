const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

// Case 2: Identify the ordinal number for number ending with any number greater than 3
// When the number ends with 4 5 6 7 8 9 or 0,
// Then the function should return "X5th"
test("should return '5th' for 5", () => {
  expect(getOrdinalNumber(5)).toEqual("5th");
});

test("should return '90th' for 90", () => {
  expect(getOrdinalNumber(90)).toEqual("90th");
});

// Case 3: Identify the ordinal number for number ending with 1
// When the number ends with 1,
// Then the function should return "X1st"
test("should return '31st' for 31", () => {
  expect(getOrdinalNumber(31)).toEqual("31st");
});

// Case 4: Identify the ordinal number for number ending with 3
// When the number ends with 3,
// Then the function should return "X3rd"
test("should return '43rd' for 43", () => {
  expect(getOrdinalNumber(43)).toEqual("43rd");
});

// Case 5: Identify the ordinal number for number ending with 2
// When the number ends with 2,
// Then the function should return "X2nd"
test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});
