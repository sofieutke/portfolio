// Funktion til at toggle burgermenuen og åbne overlay
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const overlay = document.getElementById("myNav");

  burger.addEventListener("click", function () {
    // Toggler en 'change' klasse til at animere burgermenuen
    burger.classList.toggle("change");
    // Skifter overlayets bredde afhængigt af dens nuværende tilstand
    if (overlay.style.width === "100%") {
      overlay.style.width = "0";
    } else {
      overlay.style.width = "100%";
    }
  });

  // Tilføj click event listener til close-knappen inde i overlay
  document.querySelector(".closebtn").addEventListener("click", function () {
    overlay.style.width = "0";
  });
});
