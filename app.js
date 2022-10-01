import dogs from "./data.js";
import Dog from "./Dog.js";

//Global Variables
let hasBeenSwiped = false;
let hasBeenLiked = false;
let dogArray = [0, 1, 2];

// HTML Components
document.getElementById("like-button").addEventListener("click", swipedLike);
document.getElementById("nope-button").addEventListener("click", swipedNope);

function getNewDog() {
  const nextDogData = dogs[dogArray.shift()];
  return nextDogData ? new Dog(nextDogData) : [];
}

function swipedLike() {
  if (!hasBeenLiked) {
    hasBeenLiked = true;
    document.getElementById("like-icon").style.display = "block";
    setTimeout(() => {
      if (dogArray.length > 0) {
        currentDog = getNewDog();
        renderDog();
        hasBeenLiked = false;
        document.getElementById("like-icon").style.display = "none";
      } else if (dogArray.length === 0) {
        endOfMatches();
      }
    }, 1000);
  }
}

function swipedNope() {
  if (!hasBeenSwiped) {
    hasBeenSwiped = true;
    document.getElementById("nope-icon").style.display = "block";
    setTimeout(() => {
      if (dogArray.length > 0) {
        currentDog = getNewDog();
        renderDog();
        hasBeenSwiped = false;
        document.getElementById("nope-icon").style.display = "none";
      } else if (dogArray.length === 0) {
        endOfMatches();
      }
    }, 1000);
  }
}

function endOfMatches() {
  document.body.innerHTML = `
        <div class="end-of-matches">
            <h2>You have no more matches!</h2> 
            <img class="end-emoji">emoji</img>
        </div>
        `;
}

function renderDog() {
  document.getElementById("profile").innerHTML = currentDog.getDogHtml();
}

let currentDog = getNewDog();
renderDog();



//Modal Function
const modal = document.getElementById("modal");
const closeButton = document.getElementById("modal-close-btn");

setTimeout(() => {
  modal.style.display = "inline";
}, 1500);

closeButton.addEventListener("click", () => (modal.style.display = "none"));
