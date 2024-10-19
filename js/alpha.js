const continueGame = () => {
  const alphabet = getRandomAlphabet();

  const currentLetterElement = document.getElementById("current-letter");
  currentLetterElement.innerText = alphabet;
  setbackgroundColorById(alphabet);
}

const playNow = () => {
  hideElemetById("home-section");
  showElementById("playground-section");
  continueGame();
};
