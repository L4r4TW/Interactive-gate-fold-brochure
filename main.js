console.log("kurva");
const brochure = document.querySelector(".brochure");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
let stage = 0;
let step = "";

nextButton.addEventListener("click", () => {
  if (stage < 2) {
    stage++;
    step = "next";
    updateBrochure();
  }
});

prevButton.addEventListener("click", () => {
  if (stage > 0) {
    stage--;
    step = "prev";
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
      if (step === "next") {
        document.querySelector(".left").classList.toggle("flipped-left");
        document.querySelector(".right").classList.toggle("flipped-right");
        console.log("stage1");
      } else {
        setTimeout(() => {
          document.querySelector(".brochure").classList.remove("flipped");
          document.querySelector(".middle-flip").classList.remove("top");
        }, 1000); // 7000 milliseconds = 3 seconds
        document.querySelector(".left").classList.toggle("flipped-left");
        document.querySelector(".right").classList.toggle("flipped-right");
      }

      break;
    case 2:
      // brochure.style.transform = "rotateY(-180deg)";
      document.querySelector(".brochure").classList.toggle("flipped");
      setTimeout(() => {
        document.querySelector(".left").classList.remove("flipped-left");
        document.querySelector(".right").classList.remove("flipped-right");
      }, 1000); // 7000 milliseconds = 3 seconds
      document.querySelector(".middle-flip").classList.toggle("top");

      console.log("stage2");
      break;
  }
}
