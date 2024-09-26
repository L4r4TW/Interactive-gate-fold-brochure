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
      document.querySelector(".left").style.transform = "rotateY(180deg)";
      document.querySelector(".right").style.transform = "rotateY(-180deg)";

      console.log("stage0");
      break;
    case 1:
      if (step === "next") {
        // document.querySelector(".left").classList.toggle("flipped-left");
        document.querySelector(".left").style.transform = "rotateY(0deg)";
        // document.querySelector(".right").classList.toggle("flipped-right");
        document.querySelector(".right").style.transform = "rotateY(0deg)";
        console.log("stage1");
      } else {
        setTimeout(() => {
          // document.querySelector(".brochure").classList.remove("flipped");
          document.querySelector(".flipped").style.transform = "rotateY(0deg)";
          // document.querySelector(".middle-flip").classList.remove("top");
        }, 1000); // 7000 milliseconds = 3 seconds
        // document.querySelector(".left").classList.toggle("flipped-left");
        document.querySelector(".left").style.transform = "rotateY(0deg)";
        // document.querySelector(".right").classList.toggle("flipped-right");
        document.querySelector(".right").style.transform = "rotateY(0deg)";
      }

      break;
    case 2:
      // brochure.style.transform = "rotateY(-180deg)";
      document.querySelector(".brochure").classList.toggle("flipped");
      // document.querySelector(".middle-flip").style.zIndex = "1000";
      setTimeout(() => {
        // document.querySelector(".left").classList.remove("flipped-left");
        document.querySelector(".left").style.transform = "rotateY(-180deg)";
        // document.querySelector(".right").classList.remove("flipped-right");
        document.querySelector(".right").style.transform = "rotateY(180deg)";
      }, 1000); // 7000 milliseconds = 3 seconds
      document.querySelector(".middle-flip").classList.toggle("top");

      console.log("stage2");
      break;
  }
}
