function isProperFraction(numerator, denominator) {
  //Case improper fraction
  if (numerator === 0 || numerator >= denominator) return false;
  //Case proper fraction
  if (numerator < denominator) return true;
}

module.exports = isProperFraction;
