// captured keypress
document.addEventListener('keyup', handlebuttonpressed = (event) => {
  console.log('keyboard pressed.');
  console.log(event.key);
  const currentLetterElement = document.getElementById("current-letter");
  if (event.key == currentLetterElement) {
    console.
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
