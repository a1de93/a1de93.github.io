let header = document.querySelector("#intro");
let animation = [
  { t: " ", ms: 200 },
  { t: "_", ms: 200 },
  { t: " ", ms: 200 },
  { t: "_", ms: 200 },
  { t: "T_", ms: 200 },
  { t: "TH_", ms: 200 },
  { t: "THE_", ms: 200 },
  { t: "THED_", ms: 200 },
  { t: "THEDI_", ms: 200 },
  { t: "THEDIG_", ms: 200 },
  { t: "THEDIGI_", ms: 200 },
  { t: "THEDIGIT_", ms: 200 },
  { t: "THEDIGITA_", ms: 200 },
  { t: "THEDIGITAL_", ms: 200 },
  { t: "THEDIGITALC_", ms: 200 },
  { t: "THEDIGITALCU_", ms: 200 },
  { t: "THEDIGITALCUB_", ms: 200 },
  { t: "THEDIGITALCUBE_", ms: 200 },
  { t: "THEDIGITALCUBE", ms: 200 },
];

let stepDenominator = 1;
// localStorage for animation
if (window.localStorage.stepDenominator) {
  stepDenominator = window.localStorage.stepDenominator;
}
let i = 0;
let update = () => {
  let step = animation[i];
  header.innerText = step.t;
  i++;

  //   continue animation
  //   if (i < animation.length) {
  //     setTimeout(update, step.ms / stepDenominator);
  //     //text animation is done and globe animation runs
  //   } else {
  //     setTimeout(() => {
  //       document.getElementById("main").style.opacity = 1;
  //       initGlobe();
  //     }, 500);
  //     window.localStorage.stepDenominator = 2;
  //   }

  //no text animation alternative
  setTimeout(() => {
    document.getElementById("main").style.opacity = 1;
    initGlobe();
  }, 1000);
};

//run update func
update();
