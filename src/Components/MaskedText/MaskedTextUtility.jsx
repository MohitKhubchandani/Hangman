export function getAllCharacters(word, usedLetters){
  usedLetters = usedLetters.map(letter => letter.toUpperCase());
  let guessedLetters = new Set(usedLetters);
  const characters = word.toUpperCase().split('').map(char => {
    if(guessedLetters.has(char)){
      return char
    }
    return '_'
  })
  return characters.join('');
};