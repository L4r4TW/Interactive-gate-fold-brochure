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

      document.querySelector(".middle-flip").style.zIndex = "0";

      console.log("stage0");
      break;
    case 1:
      if (step === "next") {
        document.querySelector(".left").style.transform = "rotateY(0deg)";

        document.querySelector(".right").style.transform = "rotateY(0deg)";
        console.log("stage1");
      } else {
        setTimeout(() => {
          document.querySelector(".brochure").style.transform = "rotateY(0deg)";
          document.querySelector(".flipped").style.transform = "rotateY(0deg)";
          document.querySelector(".left .front").style.visibility = "visible";
          document.querySelector(".right .front").style.visibility = "visible";
        }, 1000); // 7000 milliseconds = 3 seconds

        document.querySelector(".left").style.transform = "rotateY(0deg)";

        document.querySelector(".right").style.transform = "rotateY(0deg)";
      }

      break;
    case 2:
      document.querySelector(".flipped").style.transform = "rotateY(180deg)";
      document.querySelector(".middle-flip").style.zIndex = "1000";

      setTimeout(() => {
        document.querySelector(".left .front").style.visibility = "hidden";
        document.querySelector(".left").style.transform = "rotateY(-180deg)";
        // document.querySelector(".left").style.zIndex = "0";

        document.querySelector(".right .front").style.visibility = "hidden";
        document.querySelector(".right").style.transform = "rotateY(180deg)";
      }, 1000); // 7000 milliseconds = 3 seconds
      // document.querySelector(".middle-flip").classList.toggle("top");

      console.log("stage2");
      break;
  }
}
