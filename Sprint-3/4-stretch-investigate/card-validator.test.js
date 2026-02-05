const isValidCard = require("./card-validator");

//rule 1&2
test("Number must be 16 digits, all of them must be number", () => {
  // Arrange
  const card = "a92332119c011112";
  // Act
  const result = isValidCard(card);
  // Assert
  expect(result).toEqual(false);
});

//rule 3
test("Number must have at least two different digits represented", () => {
  // Arrange
  const card = "4444444444444444";
  // Act
  const result = isValidCard(card);
  // Assert
  expect(result).toEqual(false);
});

//rule 4
test("Number's final digit must be even", () => {
  // Arrange
  const card = "6666666666666661";
  // Act
  const result = isValidCard(card);
  // Assert
  expect(result).toEqual(false);
});

//rule 5
test("Number's digits sum must be greater than 16", () => {
  // Arrange
  const card = "1111111111111110";
  // Act
  const result = isValidCard(card);
  // Assert
  expect(result).toEqual(false);
});

//rule 1, 2, 3, 4 et 5
test("Number passes all validations", () => {
  // Arrange
  const card = "6666666666661666";
  // Act
  const result = isValidCard(card);
  // Assert
  expect(result).toEqual(true);
});
