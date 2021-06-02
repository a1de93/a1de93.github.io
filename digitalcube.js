(function () {
  // variables
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365;

  // last day 🤞
  let lastCubeDay = "Mar 13, 2024 00:00:00";
  let countDown = new Date(lastCubeDay).getTime();
  let x = setInterval(function () {
    // now time in milliseconds
    let now = new Date().getTime();
    // distance time from lastCubeDay to now in milliseconds
    let distance = countDown - now;
    // add time remaining / numbers to innerText
    document.getElementById("years").innerText = Math.floor(distance / year);
    document.getElementById("days").innerText = Math.floor(
      (distance % year) / day
    );
    document.getElementById("hours").innerText = Math.floor(
      (distance % day) / hour
    );
    document.getElementById("minutes").innerText = Math.floor(
      (distance % hour) / minute
    );
    document.getElementById("seconds").innerText = Math.floor(
      (distance % minute) / second
    );

    // change headline, countdown, content when date is reached
    if (distance < 0) {
      let headline = document.getElementById("headline");
      let countdown = document.getElementById("countdown");
      let content = document.getElementById("content");
      headline.innerText = "LAST DAY OF CUBES";
      countdown.style.display = "none";
      // stops countdown once date is reached
      clearInterval(x);
    }
  }, 0);
})();

// disable rightclick
window.addEventListener(
  "contextmenu",
  function (e) {
    // do something here...
    e.preventDefault();
  },
  false
);
