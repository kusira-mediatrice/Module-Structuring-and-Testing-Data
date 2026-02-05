function getCardValue(card) {
  let rank = card.substring(0, card.length - 1);

  if (rank === "A") return 11;
  if (rank === "J" || rank === "K" || rank === "Q") return 10;
  if (!isNaN(rank)) return Number(rank);
}
module.exports = getCardValue;
