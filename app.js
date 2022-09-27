import dogs from "./data.js";
import Dog from "./Dog.js";

function getNewDog() {
  const nextDogData = dogs.shift();
  return nextDogData ? new Dog(nextDogData) : {};
}

function render() {
  document.getElementById("profile").innerHTML = currentDog.getDogHtml();
}

// const currentDog = new Dog(dogs[0]);
let currentDog = getNewDog();
render();
