function getRandomWord() {
  const words = [
    "apple", "grape", "pearl", "sunny", "happy", 
    "smile", "dream", "music", "dance", "story", 
    "house", "moon", "cloud", "rain", "snow", 
    "beach", "earth", "waves", "heart", "flame",
    "light", "sweet", "brave", "fruit", "sharp"
];


  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

export default getRandomWord;