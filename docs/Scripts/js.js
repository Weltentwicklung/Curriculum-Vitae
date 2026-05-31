
   /* ==============================================================
     Image Game Functionalities
   ============================================================== */
   /* --------------------------------------------------------------
        Button
   -------------------------------------------------------------- */
const imageGamePopup = document.getElementById("image-game-popup");

document.getElementById("image-game-button").addEventListener("click", () => {
  imageGamePopup.showModal();
  imageGamePopup.scrollTo(0, 0);
  const canvas = document.getElementById("canvas-box");
  const puzzle = document.getElementById("puzzle-box");

  setGameBoxGrid(imageGamePopup);
  calculateBoxSize(canvas);
  calculateBoxSize(puzzle);

  const observer = new ResizeObserver(() => {
    setGameBoxGrid(imageGamePopup);
    calculateBoxSize(canvas);
    calculateBoxSize(puzzle);
  });

  observer.observe(imageGamePopup);
});

document.getElementById("close-image-game").addEventListener("click", () => {imageGamePopup.close();});

   /* --------------------------------------------------------------
        Styling
   -------------------------------------------------------------- */
function calculateBoxSize(element) {
  if(element.parentElement.offsetWidth < element.parentElement.offsetHeight) {
    element.style.width = "95%";
  }
  else {
    element.style.height = "95%";
  }
}

function setGameBoxGrid(element) {
  if(element.offsetHeight > (1.2 * element.offsetWidth)) {
    element.classList.add("dialog-field-stacked");
    element.classList.remove("dialog-field-wide");
  }
  else {
    element.classList.add("dialog-field-wide");
    element.classList.remove("dialog-field-stacked");
  }
}



/*

const response = await fetch(
    "openplzapi.org/ch/Localities?postalCode={Postleitzahl}&name={Ortsname}" + encodeURIComponent(query) //(nimmt url untaugliche zeichen raus)!!!
)


if (!response.ok) -> wenn mit 2 beginnt


xx = response.jason

Ort= xx.ort
plz= xx.plz */
/*
loop trough all 

add it to a list display it in a drop down list
*/ 
