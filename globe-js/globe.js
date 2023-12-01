globe = new ENCOM.Globe(
  window.innerWidth,
  window.innerHeight - (main.clientTop + main.clientHeight),
  {
    font: "Helvetica",
    data: [],
    tiles: grid.tiles,
    baseColor: "#000000",
    markerColor: "#99FEFF",
    pinColor: "#99FEFF",
    satelliteColor: "#99FEFF",
    scale: 1.0,
    dayLength: 90000,
    introLinesDuration: 2000,
    maxPins: 500,
    maxMarkers: 4,
    viewAngle: 0.1,
  }
);

// attach globe to: details id
document.getElementById("details").appendChild(globe.domElement);

// animates globe
function animate() {
  if (globe) {
    globe.tick();
  }
  requestAnimationFrame(animate);
}

// initGlobe
let initGlobe = () => {
  globe.init();
  animate();
  //gets ip api
  fetch("https://ipapi.co/json/") //https://ipapi.co/json/
    .then((r) => r.text())
    .then((r) => {
      let loc = JSON.parse(r);
      globe.addMarker(loc.latitude, loc.longitude, loc.ip);
      //gets seoul ip address
      fetch("https://ipapi.co/192.80.65.177/json/")
      .then((r) => r.text())
      .then((r) => {
        let loc2 = JSON.parse(r);
        globe.addMarker(
          loc2.latitude,
          loc2.longitude,
          loc2.ip,
          Math.abs(loc.lon - loc2.lon) > 25
        );
      });
    });
  // constellation circle dot things
  var constellation = [];
  var opts = {
    coreColor: "#99FEFF",
    numWaves: 9,
  };
  var alt = 1;

  //randomize circle-dots locations
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
      constellation.push({
        lat: 50 * i - 30 + 15 * Math.random(),
        lon: 120 * j - 120 + 30 * i,
        altitude: alt,
      });
    }
  }
  globe.addConstellation(constellation, opts);
};

// disable rightclick
window.addEventListener(
  "contextmenu",
  function (e) {
    // do something here...
    e.preventDefault();
  },
  false
);

// window.addEventListener("resize", () => {
//   let h = window.innerHeight - (main.clientTop + main.clientHeight);
//   globe.camera.aspect = window.innerWidth / h;
//   globe.camera.updateProjectionMatrix();
//   globe.renderer.setSize(window.innerWidth, h);
// });
