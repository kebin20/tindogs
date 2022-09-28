import dogs from "./data.js";
import Dog from "./Dog.js";

// HTML Components
document.getElementById("like-button").addEventListener("click", () => {
  renderLike();
  // render();
});
document.getElementById("nope-button").addEventListener("click", () => {
  renderNope();
  // render();
});

function getNewDog() {
  const nextDogData = dogs.shift();
  return nextDogData ? new Dog(nextDogData) : {};
}

function renderLike() {
  document.getElementById("profile").innerHTML = `
  <image src="images/badge-like.png"></image>
  ${currentDog.getDogHtml()}`;
}

function renderNope() {
  document.getElementById(
    "profile"
  ).innerHTML = `<image src="images/badge-nope.png"></image>
  ${currentDog.getDogHtml()}`;
}

function render() {
  document.getElementById("profile").innerHTML = currentDog.getDogHtml();
  // document.getElementById("profile").innerHTML = bella.getDogHtml();
}

let currentDog = getNewDog();
render();
