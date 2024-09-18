// function flipCard() {
//   document.querySelector(".left").classList.toggle("flipped-left");
//   document.querySelector(".right").classList.toggle("flipped-right");
// }
console.log("kurva");
const brochure = document.querySelector(".brochure");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
let stage = 0;

// Add an event listener to the whole document for the keydown event
// document.addEventListener("keydown", function (event) {
//   switch (event.key) {
//     case "ArrowUp":
//       updateBrochure();
//       console.log("anyad");
//       stage++;
//       break;
//     case "ArrowDown":
//       output.textContent = "You pressed the DOWN arrow!";
//       handleDownArrow();
//       break;
//     case "ArrowLeft":
//       handleLeftArrow();
//       break;
//     case "ArrowRight":
//       output.textContent = "You pressed the RIGHT arrow!";
//       handleRightArrow();
//       break;
//     default:
//       output.textContent = "Press one of the arrow keys!";
//       break;
//   }
// });

nextButton.addEventListener("click", () => {
  if (stage < 2) {
    stage++;
    updateBrochure();
  }
});

prevButton.addEventListener("click", () => {
  if (stage > 0) {
    stage--;
    updateBrochure();
  }
});

function updateBrochure() {
  switch (stage) {
    case 0:
      // brochure.style.transform = "rotateY(0deg)";
      document.querySelector(".left").classList.remove("flipped-left");
      document.querySelector(".right").classList.remove("flipped-right");
      console.log("stage0");
      break;
    case 1:
      document.querySelector(".left").classList.toggle("flipped-left");
      document.querySelector(".right").classList.toggle("flipped-right");
      console.log("stage1");
      break;
    case 2:
      // brochure.style.transform = "rotateY(-180deg)";
      document.querySelector(".brochure").classList.toggle("flipped");
      console.log("stage2");
      break;
  }
}
