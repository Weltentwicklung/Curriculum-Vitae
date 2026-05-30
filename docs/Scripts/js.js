
   /* ==============================================================
     Image Game Functionalities
   ============================================================== */
   /* --------------------------------------------------------------
        Button
   -------------------------------------------------------------- */
const imageGamePopup = document.getElementById("image-game-popup");

document.getElementById("image-game-button").addEventListener("click", () => {imageGamePopup.showModal();});

document.getElementById("close-image-game").addEventListener("click", () => {imageGamePopup.close();});



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
