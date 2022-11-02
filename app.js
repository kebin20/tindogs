import dogs from "./data.js";
import Dog from "./Dog.js";

// Global Variables
let hasBeenSwiped = false;
let hasBeenLiked = false;
const dogArray = [0, 1, 2, 3, 4, 5, 6];

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
    document.getElementById("nope-button").disabled = true;
    setTimeout(() => {
      if (dogArray.length > 0) {
        currentDog = getNewDog();
        renderDog();
        hasBeenLiked = false;
        document.getElementById("like-icon").style.display = "none";
        document.getElementById("nope-button").disabled = false;
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
    document.getElementById("like-button").disabled = true;
    setTimeout(() => {
      if (dogArray.length > 0) {
        currentDog = getNewDog();
        renderDog();
        hasBeenSwiped = false;
        document.getElementById("nope-icon").style.display = "none";
        document.getElementById("like-button").disabled = false;
      } else if (dogArray.length === 0) {
        endOfMatches();
      }
    }, 1000);
  }
}

function endOfMatches() {
  document.body.innerHTML = `
      
  <div class="end-of-matches">
        <nav class="nav-container">
            <button><img src="images/icon-profile.png" alt=""></button>
            <button class="refresh-button" onClick="window.location.reload();"><img src="images/logo.png"
                    class="paw-logo" alt=""></button>
            <button><img src="images/icon-chat.png" alt=""></button>
        </nav>
        <div class="text-container">
            <h2>You have no more matches! Click the paw button to refresh the page to go back to your original matches.</h2> 
            <img src="images/dog-sad.jpg" class="end-emoji"></img>
            </div>
        </div>
        `;
}

function renderDog() {
  document.getElementById("profile").innerHTML = currentDog.getDogHtml();
}

let currentDog = getNewDog();
renderDog();

// Modal Function
const modal = document.getElementById("modal");
const closeButton = document.getElementById("modal-close-btn");

closeButton.addEventListener("click", () => (modal.style.display = "none"));
