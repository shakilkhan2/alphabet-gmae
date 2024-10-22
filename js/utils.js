// get element innertext by id
const getElementinnerTextById = (elementId) => {
  const element = document.getElementById(elementId);
  const text = element.innerText;

  return text;
};
// get current value by id
const getCurrentValueById = (valueId) => {
  const currentValueElement = document.getElementById(valueId);
  const currentValue = parseInt(currentValueElement.innerText, 10);

  return currentValue;
};
// set value by id
const setInnertextById = (elementId, value) => {
  const element = document.getElementById(elementId);
  element.innerText = value;
};
// hide element by id
function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
// show element by id
const showElementById = (elementId) => {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
};
// setbackground color by id
const setbackgroundColorById = (elementId) => {
  const element = document.getElementById(elementId);
  element.classList.add("bg-amber-500");
};
// remove background color by id
const removeBackgroundColorById = (elementId) => {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-amber-500");
};
// get random alphabet
const getRandomAlphabet = () => {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];

  return alphabet;
};
