const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return the corresponding number between 2-10", () => {
  const fiveofHearts = getCardValue("5♥");
  expect(fiveofHearts).toEqual(5);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for (J, Q, K) of Spades", () => {
  const tenWorthCardofHearts = getCardValue("J♥");
  expect(tenWorthCardofHearts).toEqual(10);
});
// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards:
