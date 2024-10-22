// captured keypress
document.addEventListener('keyup', handlebuttonpressed = (event) => {
  const playerPressed = event.key;
  console.log('keyboard pressed.');
  // console.log(event.key);
  const currentLetterElement = document.getElementById("current-letter");
  const currentAlphabet = currentLetterElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // score handaling
  const scoreElement = document.getElementById("score");
  let scoreValue = parseInt(scoreElement.innerText, 10);
  // lifeline
  const LifeLineElement = document.getElementById("life-line");
  let lifeline = parseInt(LifeLineElement.innerText, 10);
  if (playerPressed === expectedAlphabet) {
    scoreValue++;
    scoreElement.innerText = scoreValue;
    playNow();
    removeBackgroundColorById(expectedAlphabet);
  } else{
    lifeline--;
    LifeLineElement.innerText = lifeline;

    if(lifeline === 0){
 hideElemetById("playground-section");
 showElementById("score-section");
    }
  }
})
// continue game
const continueGame = () => {
  const alphabet = getRandomAlphabet();

  const currentLetterElement = document.getElementById("current-letter");
  currentLetterElement.innerText = alphabet;
  setbackgroundColorById(alphabet);
}
// play now
const playNow = () => {
  hideElemetById("home-section");
  // hideElemetById("score-section");
  showElementById("playground-section");
  continueGame();
};
