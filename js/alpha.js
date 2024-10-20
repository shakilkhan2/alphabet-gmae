// captured keypress
document.addEventListener('keyup', handlebuttonpressed = (event) => {
  const playerPressed = event.key;
  console.log('keyboard pressed.');
  // console.log(event.key);
  const currentLetterElement = document.getElementById("current-letter");
  const currentAlphabet = currentLetterElement.innerText;
  const expectedAlphabet = currentAlphabet;
  const scoreElement = document.getElementById('score');
  let scoreValue = scoreElement.innerText;
  if (playerPressed === expectedAlphabet) {
    scoreValue = scoreValue++;
    continueGame();
  } else {
    console.log('not matched!')
  }
})

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
