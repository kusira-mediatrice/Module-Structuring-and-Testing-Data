function isValidCard(card) {
  //rule1-2: Must  be a string contain exactly 16 characters
  if (!/^\d{16}$/.test(card)) return false;

  //rule3: Must contain at least 2 different digits
  if (/^(\d)\1{15}$/.test(card)) return false;

  //rule4: The final digit must be even
  if (!/[02468]$/.test(card)) return false;

  //rule5: The sum of all the digits must be greater than 16
  if (!/[2-9]/.test(card)) return false;

  return true;
}

module.exports = isValidCard;
