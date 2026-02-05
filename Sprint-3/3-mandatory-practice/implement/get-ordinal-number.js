function getOrdinalNumber(num) {
  let remainder = num % 10;
  if (remainder > 3 || remainder == 0) return num.toString().concat("th");
  if (remainder === 1) return num.toString().concat("st");
  if (remainder === 2) return num.toString().concat("nd");
  if (remainder === 3) return num.toString().concat("rd");
}

module.exports = getOrdinalNumber;
