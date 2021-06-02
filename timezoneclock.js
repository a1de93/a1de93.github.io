function dateToText(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  if (hours < 10) hours = "0" + hours;
  return hours + ":" + minutes + ":" + seconds;
}

function updateClocks() {
  for (let i = 0; i < window.arrClocks.length; i++) {
    var clock = window.arrClocks[i];
    var offset = window.arrOffsets[i];
    clock.innerHTML = dateToText(new Date(new Date().getTime() + offset));
  }
}

function startClocks() {
  clockElements = document.getElementsByClassName("clock");
  window.arrClocks = [];
  window.arrOffsets = [];
  // for clockElements with class "clock"
  for (let i = 0; i < clockElements.length; i++) {
    // each clockElement is el
    let el = clockElements[i];
    //parse int to get timezone
    let timezone = parseInt(el.getAttribute("timezone"));
    // if timezone is a number
    if (!isNaN(timezone)) {
      //getTimezoneOffset() method gets time difference between UTC and local time
      //timezone * 60 + time difference between utc and local time
      let tzDifference = timezone * 60 + new Date().getTimezoneOffset();
      let offset = tzDifference * 60 * 1000;
      //push each clockElement/offset to their array
      window.arrClocks.push(el);
      window.arrOffsets.push(offset);
    }
  }
  updateClocks();
  clockID = setInterval(updateClocks, 1000);
}
setTimeout(startClocks, 100);
