   /* ==============================================================
     Header functionalities
   ============================================================== */

/* show and hide menu */
let prevScrollPos = window.pageYOffset;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 110) {
      if (currentScrollPos > prevScrollPos) {
        header.classList.add("header-hidden");
    } else {
        header.classList.remove("header-hidden");
    }
    prevScrollPos = currentScrollPos;
  }
});
   
/* show and hide nav ul and nav button */
const navSection = document.getElementById("nav-section");
const popupNavBtn = document.getElementById("popup-nav-btn");
const reziseObsForNav = new ResizeObserver(() => {
  displayNavItem();
});
reziseObsForNav.observe(document.body);

function displayNavItem() {
  popupNavBtn.classList.add("hide-nav-item");
  navSection.classList.remove("hide-nav-item");
  
  let headerWidth = document.getElementById("header").clientWidth;
  let headerFlexWidth = document.getElementById("header").scrollWidth;

  if (headerFlexWidth > headerWidth) {
    popupNavBtn.classList.remove("hide-nav-item");
    navSection.classList.add("hide-nav-item");
  }
}

/* nav popup settings on nav button click */
document.getElementById("popup-nav-btn").addEventListener("click", () => {
  document.getElementById("popup-nav-menu").showModal();
});

document.getElementById("popup-nav-btn-inro").addEventListener("click", () => {
  document.getElementById("popup-nav-menu").close();
});

document.getElementById("popup-nav-btn-exper").addEventListener("click", () => {
  document.getElementById("popup-nav-menu").close();
});

document.getElementById("popup-nav-btn-edu").addEventListener("click", () => {
  document.getElementById("popup-nav-menu").close();
});

document.getElementById("popup-nav-btn-sk").addEventListener("click", () => {
  document.getElementById("popup-nav-menu").close();
});

document.getElementById("popup-nav-btn-about").addEventListener("click", () => {
  document.getElementById("popup-nav-menu").close();
});


   /* ==============================================================
     Image Game Functionalities
   ============================================================== */
   /* --------------------------------------------------------------
        Puzzle File and Center Offset List
   -------------------------------------------------------------- */

   const puzzlePieceList = [
    { file: "p-1.webp", cx: 40.7, cy: 50 },
    { file: "p-2.webp", cx: 50, cy: 50 },
    { file: "p-3.webp", cx: 50, cy: 54 },
    { file: "p-4.webp", cx: 41.6, cy: 43.4 },
    { file: "p-5.webp", cx: 59.2, cy: 40.1 },
    { file: "p-6.webp", cx: 53.2, cy: 39.4 },
    { file: "p-7.webp", cx: 59.3, cy: 50 },
    { file: "p-8.webp", cx: 42.6, cy: 50 },
    { file: "p-9.webp", cx: 50, cy: 50 },
    { file: "p-10.webp", cx: 43.9, cy: 61.7 },
    { file: "p-11.webp", cx: 51.2, cy: 50 },
    { file: "p-12.webp", cx: 50, cy: 50 },
    { file: "p-13.webp", cx: 50, cy: 41.4 },
    { file: "p-14.webp", cx: 50, cy: 41 },
    { file: "p-15.webp", cx: 57.8, cy: 57.1 },
    { file: "p-16.webp", cx: 41.1, cy: 58.8 },
    { file: "p-17.webp", cx: 50, cy: 50 },
    { file: "p-18.webp", cx: 52.6, cy: 50 },
    { file: "p-19.webp", cx: 50, cy: 51.1 },
    { file: "p-20.webp", cx: 59.8, cy: 41.8 },
    { file: "p-21.webp", cx: 50, cy: 49.3 },
    { file: "p-22.webp", cx: 59.4, cy: 58.5 },
    { file: "p-23.webp", cx: 50, cy: 49.5 },
    { file: "p-24.webp", cx: 50, cy: 58.2 },
    { file: "p-25.webp", cx: 49.3, cy: 57.1 },
    { file: "p-26.webp", cx: 50, cy: 58.1 },
    { file: "p-27.webp", cx: 43.5, cy: 48.5 },
    { file: "p-28.webp", cx: 49.3, cy: 57.8 },
    { file: "p-29.webp", cx: 50, cy: 50 },
    { file: "p-30.webp", cx: 51.2, cy: 39.5 },
    { file: "p-31.webp", cx: 51.1, cy: 57.4 },
    { file: "p-32.webp", cx: 59, cy: 50 },
    { file: "p-33.webp", cx: 62.7, cy: 47.4 },
    { file: "p-34.webp", cx: 56.7, cy: 59.7 },
    { file: "p-35.webp", cx: 50, cy: 42.4 },
    { file: "p-36.webp", cx: 41.1, cy: 41.5 },
    { file: "p-37.webp", cx: 50, cy: 47.0 },
    { file: "p-38.webp", cx: 40.6, cy: 50 },
    { file: "p-39.webp", cx: 50.5, cy: 50 },
    { file: "p-40.webp", cx: 49.3, cy: 49.5 },
    { file: "p-41.webp", cx: 50, cy: 50 },
    { file: "p-42.webp", cx: 38.4, cy: 56.7 },
    { file: "p-43.webp", cx: 50, cy: 49.1 },
    { file: "p-44.webp", cx: 50, cy: 56.5 },
    { file: "p-45.webp", cx: 59.3, cy: 60.9 },
    { file: "p-46.webp", cx: 51.8, cy: 50 },
    { file: "p-47.webp", cx: 47.6, cy: 51.8 },
    { file: "p-48.webp", cx: 50, cy: 49.6 },
    { file: "p-49.webp", cx: 62.5, cy: 59.5 },
    { file: "p-50.webp", cx: 62.1, cy: 50 },
    { file: "p-51.webp", cx: 61.1, cy: 60.5 },
    { file: "p-52.webp", cx: 51.7, cy: 50 },
    { file: "p-53.webp", cx: 50, cy: 48.8 },
    { file: "p-54.webp", cx: 40.1, cy: 50 },
    { file: "p-55.webp", cx: 42.5, cy: 50 },
    { file: "p-56.webp", cx: 39.7, cy: 55.5 },
    { file: "p-57.webp", cx: 52.4, cy: 50 },
    { file: "p-58.webp", cx: 41.3, cy: 58.5 },
    { file: "p-59.webp", cx: 50, cy: 46.0 },
    { file: "p-60.webp", cx: 39.4, cy: 42.4 },
    { file: "p-61.webp", cx: 50.7, cy: 59 },
    { file: "p-62.webp", cx: 41.5, cy: 41.8 },
    { file: "p-63.webp", cx: 50, cy: 50 },    
    { file: "p-64.webp", cx: 50, cy: 50 }
   ]

   /* --------------------------------------------------------------
        Vars
   -------------------------------------------------------------- */
const imageGamePopup = document.getElementById("image-game-popup");
const puzzleSection = document.getElementById("puzzle");
const puzzleBox = document.getElementById("puzzle-box");
const observer = new ResizeObserver(() => {
  scaleGameBoxes(puzzleSection);
});

/* Click - function that initialize the popupgame */
document.getElementById("image-game-button").addEventListener("click", () => {
  puzzleBox.innerHTML = "";
  imageGamePopup.showModal();
  imageGamePopup.scrollTo(0, 0);

  scaleGameBoxes(puzzleSection);
  setPuzzlePieces(puzzlePieceList, puzzleBox);
  
  observer.observe(imageGamePopup);

});

/* Close-Button */
document.getElementById("close-image-game").addEventListener("click", () => {
  observer.disconnect();
  imageGamePopup.close();
});
document.getElementById("close-image-game-2").addEventListener("click", () => {
  observer.disconnect();
  imageGamePopup.close();
});

   /* --------------------------------------------------------------
        Styling
   -------------------------------------------------------------- */

/* load all puzzle pieces and set their css */
function setPuzzlePieces(puzzleList, puzzleBox) {
  const zIndexPool = Array.from({length: 64}, (_, i) => i + 101);
  for (const piece of puzzleList) {
    const img = document.createElement("img");
    const x = Math.random() * 100; 
    const y = Math.random() * 100;
    const randomZ = zIndexPool.splice(Math.floor(Math.random() * zIndexPool.length), 1)[0];
    img.src = `Images/${piece.file}`;
    img.style.position = "absolute";    
    img.style.left = x + "%";
    img.style.top = y + "%";
    img.style.zIndex = randomZ;
    img.style.transformOrigin = `${piece.cx}% ${piece.cy}%`;
    img.classList.add("piece-drop");
    puzzleBox.appendChild(img);
  }
}

/* Scaling the puzzle box when the popup opens or user rezises the window */
function scaleGameBoxes(puzzleSection) {
    const puzzleSize = Math.min(puzzleSection.offsetWidth, puzzleSection.offsetHeight);
    const puzzleScale = puzzleSize / 1600;
    puzzleBox.style.width = "1600px";
    puzzleBox.style.height = "1600px";
    puzzleBox.style.transform = `scale(${puzzleScale})`;
}

   /* --------------------------------------------------------------
        Moving Puzzle Pieces
   -------------------------------------------------------------- */

let selectedPiece = null;

puzzleBox.addEventListener("dblclick", (e) => {
    if (e.target.tagName === "IMG" && selectedPiece === null) {
        selectedPiece = e.target;
        selectedPiece.style.cursor = "grabbing";
    } else if (selectedPiece !== null) {
        selectedPiece.style.cursor = "grab";
        selectedPiece = null;
    }
});

puzzleBox.addEventListener("mousemove", (e) => {
    if (selectedPiece === null) return;
    const box = selectedPiece.parentElement.getBoundingClientRect();
    const scale = box.width / 1600;
    selectedPiece.style.left = (e.clientX - box.left) / scale + "px";
    selectedPiece.style.top = (e.clientY - box.top) / scale + "px";
});

puzzleBox.addEventListener("touchmove", (e) => {
    if (selectedPiece === null) return;
    const touch = e.touches[0];
    const box = selectedPiece.parentElement.getBoundingClientRect();
    const scale = box.width / 1600;
    selectedPiece.style.left = (touch.clientX - box.left) / scale + "px";
    selectedPiece.style.top = (touch.clientY - box.top) / scale + "px";
});

   /* --------------------------------------------------------------
        Rules Popup
   -------------------------------------------------------------- */

document.getElementById("info-button").addEventListener("click", () => {
    alert("Double click to select a piece\nMove mouse to drag\nDouble click to place");
});

   /* ==============================================================
     Guessing Name Game
   ============================================================== */

const nameGameButton = document.getElementById("guessing-name-game");
const riskLiveButton = document.getElementById("risk-live-btn");
const closeNameGameBtn = document.getElementById("close-name-game");
const nameGameDialog = document.getElementById("name-game-dialog");
const livesDisplay = document.getElementById("lives-display");
const correctChars = document.getElementById("correct-chars");
const charInput = document.getElementById("char-input")
var lives = 5;
const solutionString = ["s","t","e","f","a","n"," ","h","u","b","s","c","h","m","i","d"];
let guessedString = ["_","_","_","_","_","_"," ","_","_","_","_","_","_","_","_","_"];

   /* --------------------------------------------------------------
        Entry - Exit
   -------------------------------------------------------------- */

function updateDisplay() {
    correctChars.textContent = guessedString.join("");
    livesDisplay.innerHTML = `You have ${lives} lives left`;
}

nameGameButton.addEventListener("click", () => {
  nameGameDialog.showModal();
  updateDisplay();
  lives = 5;
  guessedString.fill("_");
  guessedString[6] = " ";
});


riskLiveButton.addEventListener("click", () => {
    const guess = charInput.value.toLowerCase();
    charInput.value = "";
    if (lives === 0) {
      livesDisplay.innerHTML = "(∩｀-´)⊃━☆ﾟ.*･｡ﾟ no live to risk left, nice try...";
      return;
    }
    if (!guess) return;


    if (guess.length !== 1 || !/[a-z]/.test(guess)) {
    lives--;
    livesDisplay.innerHTML = "Invalid input — one letter only. You still risked a life! (∀‿∀) ~muahahaha~";
    return;
    }

    let correct = false;
    for (let i = 0; i < solutionString.length; i++) {
        if (solutionString[i] === guess) {
            guessedString[i] = guess;
            correct = true;
        }
    }

    if (!correct) {
      lives--;
    }

    if (lives === 0) {
      livesDisplay.innerHTML = "Thanks for you lives ♡\(^▽^)/♡ see you arond buddy..."
      return;
    }


    if (!guessedString.includes("_")) {
      updateDisplay();
      livesDisplay.innerHTML = "You got me there (╥_╥) now i feel naked..."
      return;
    }

    updateDisplay();
  });

closeNameGameBtn.addEventListener("click", () => {
  nameGameDialog.close();
})
        