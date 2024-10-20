function hideElemetById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
const showElementById = (elementId) => {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
};
const setbackgroundColorById = (elementId) => {
  const element = document.getElementById(elementId);
  element.classList.add("bg-amber-500");
};
const removeBackgroundColorById = (elementId) => {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-amber-500");
};

const getRandomAlphabet = () => {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];

  return alphabet;
};
