const continueGame = () => {
  const alphabet = getRandomAlphabet(alphabet);
}

const playNow = () => {
  hideElemetById("home-section");
  showElementById("playground-section");
  continueGame();
};
