const brochure = document.querySelector(".brochure");
const innerLeft = document.querySelector(".inner-left");
const innerRight = document.querySelector(".inner-right");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
let stage = 0;

nextButton.addEventListener("click", () => {
  if (stage < 2) stage++;
  updateBrochure();
});

prevButton.addEventListener("click", () => {
  if (stage > 0) stage--;
  updateBrochure();
});

function updateBrochure() {
  switch (stage) {
    case 0:
      brochure.style.transform = "rotateY(0deg)"; // Show Front Page
      innerLeft.style.transform = "rotateY(0deg)"; // Reset left panel
      innerRight.style.transform = "rotateY(0deg)"; // Reset right panel
      console.log("stage1");
      break;
    case 1:
      brochure.style.transform = "rotateY(0deg)"; // No rotation, show both panels
      innerLeft.style.transform = "rotateY(180deg)"; // Open left panel
      innerRight.style.transform = "rotateY(-180deg)"; // Open right panel
      console.log("stage2");
      break;
    case 2:
      brochure.style.transform = "rotateY(-180deg)"; // Show Back Page
      console.log("stage3");
      break;
  }
}
