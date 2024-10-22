// captured keypress
document.addEventListener(
  "keyup",
  (handlebuttonpressed = (event) => {
    const playerPressed = event.key;
    console.log("keyboard pressed.");
    // console.log(event.key);
    const currentLetterElement = document.getElementById("current-letter");
    const currentAlphabet = currentLetterElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (playerPressed === expectedAlphabet) {
      // score handaling
      let scoreValue = getCurrentValueById("current-score");
      scoreValue++;
      setInnertextById("current-score", scoreValue);
      playNow();
      removeBackgroundColorById(expectedAlphabet);
    } else {
      // lifeline
      let currentLife = getCurrentValueById("current-life");
      currentLife--;
      setInnertextById("current-life", currentLife);
      if (currentLife === 0) {
        hideElemetById("playground-section");
        showElementById("score-section");
        let scoreValue = getCurrentValueById("current-score");
        setInnertextById("final-score", scoreValue);
      }
    }
  })
);
// continue game
const continueGame = () => {
  const alphabet = getRandomAlphabet();

  const currentLetterElement = document.getElementById("current-letter");
  currentLetterElement.innerText = alphabet;
  setbackgroundColorById(alphabet);
};
// restart game
const restartGame = () => {
  // refresh life
  getCurrentValueById("current-life");
  setInnertextById("current-life", 5);
  // refresh scores
  getCurrentValueById("current-score");
  setInnertextById("current-score", 0);
  //
  hideElemetById("score-section");
  showElementById("playground-section");
  continueGame();
};
// play now
const playNow = () => {
  hideElemetById("home-section");
  showElementById("playground-section");
  continueGame();
};
