function countChar(stringOfCharacters, findCharacter) {
  // Mediatrice, a ===> 1,   / i ===> 2
  //Replace findCharacter by "" in the given string that is first parameter stringOfCharacters
  //Substract the length of the given string and the resulting string without the findCharacter
  // Since we are looking for an occurence of a single charater then we divide by 1 to find the exact occurence
  return (
    (stringOfCharacters.length -
      stringOfCharacters.replaceAll(findCharacter, "").length) /
    findCharacter.length
  );
}

module.exports = countChar;
