console.log("kurva");
const brochure = document.querySelector(".brochure");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
let stage = 0;

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
