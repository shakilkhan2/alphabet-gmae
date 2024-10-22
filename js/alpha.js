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
        hideElementById("playground-section");
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
  setInnertextById("current-life", 5);
  // refresh scores
  setInnertextById("current-score", 0);
  // Hide the score section and show the playground
  hideElementById("score-section");
  showElementById("playground-section");
  continueGame();
};
// play now
const playNow = () => {
  hideElementById("home-section");
  showElementById("playground-section");
  continueGame();
};
