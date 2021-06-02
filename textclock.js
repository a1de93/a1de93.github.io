function textClock() {
  //variables
  let newDate = new Date();
  let day = newDate.getDay();
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes().toString();
  let seconds = newDate.getSeconds().toString();

  //12 hour not 24 hour
  if (hours > 12 && hours !== 0 && hours !== 23) {
    hours = hours - 12;
  }
  if (minutes < 10) {
    minutes = 0 + minutes;
  }
  if (seconds < 10) {
    seconds = 0 + seconds;
  }

  //MIN and SEC are strings
  let minsSecs = minutes + seconds;
  //if MIN is greater than 32 and SEC is greater than 20
  if (minsSecs > 3230) {
    hours++;
  }

  //if friday, GTFI changes to TGIF
  if (day === 5) {
    $("#tgif").html("TGIF");
  }

  //text version of numbers
  hoursObj = {
    1: "#one",
    2: "#two",
    3: "#three",
    4: "#four",
    5: "#five-hr",
    6: "#six",
    7: "#seven",
    8: "#eight",
    9: "#nine",
    10: "#ten-hr",
    11: "#eleven",
    12: "#twelve",
    23: "#eleven",
    24: "#midnight",
    0: "#midnight",
  };

  //run updateHour function
  updateHour(hoursObj[hours]);

  //if minsSecs greater or equal to 57MIN and 30SEC and minsSecs less than 60MIN and 0SEC
  if (
    (minsSecs >= 5730 && minsSecs < 6000) ||
    (minsSecs >= 0 && minsSecs < 3530)
  ) {
    //if hours doesn't equal 24 and hours doesn't equal 0
    if (hours !== 24 && hours !== 0) {
      updateDesc("#oclock");
    }
    //else if minsSecs greater than or equal to 2MIN and 30SEC and minsSecs less than 7MIN and 30SEC
  } else if (minsSecs >= 230 && minsSecs < 730) {
    updateDesc("#five, #past");
    //else if minsSecs greater than 7MIN and 30SEC and minsSecs less than 12MIN and 30SEC
  } else if (minsSecs >= 730 && minsSecs < 1230) {
    updateDesc("#ten, #past");
    //else if minsSecs greater than or equal to 12MIN and 30SEC and minsSecs less than 17MIN and 30SEC
  } else if (minsSecs >= 1230 && minsSecs < 1730) {
    updateDesc("#quarter, #past");
    //else if minsSecs greater than or equal to 17MIN and 30SEC and minsSecs less than 22MIN and 30SEC
  } else if (minsSecs >= 1730 && minsSecs < 2230) {
    updateDesc("#twenty, #past");
    //else if minsSecs greater than or equal to 22MIN and 30SEC and minsSecs less than 27MIN and 30SEC
  } else if (minsSecs >= 2230 && minsSecs < 2730) {
    updateDesc("#twenty, #five, #past");
    //else if minsSecs greater than or equal to 27MIN and 30SEC and minsSecs less than 32MIN and 30SEC
  } else if (minsSecs >= 2730 && minsSecs < 3230) {
    updateDesc("#half, #past");
    //else if minsSecs greater than or equal to 32MIN and 30SEC and minsSecs less than 37MIN and 30SEC
  } else if (minsSecs >= 3230 && minsSecs < 3730) {
    updateDesc("#twenty, #five, #to");
    //else if minsSecs greater than or equal to 37MIN and 30SEC and minsSecs less than 42MIN and 30SEC
  } else if (minsSecs >= 3730 && minsSecs < 4230) {
    updateDesc("#twenty, #to");
    //else if minsSecs greater than or equal to 42MIN and 30SEC and minsSecs less than 47MIN and 30SEC
  } else if (minsSecs >= 4230 && minsSecs < 4730) {
    updateDesc("#quarter, #to");
    //else if minsSecs greater than or equal to 47MIN and 30SEC and minsSecs less than 52MIN and 30SEC
  } else if (minsSecs >= 4730 && minsSecs < 5230) {
    updateDesc("#ten, #to");
    //else if minsSecs greater than 52MIN and 30SEC and minsSecs less than 57MIN and 30SEC
  } else if (minsSecs >= 5230 && minsSecs < 5730) {
    updateDesc("#five, #to");
  } else {
    updateDesc();
  }
}

//updateDesc function takes classes in if/else statement in parameter
//and updates classes by removing active class then re-adding active class with given class/s parameters
function updateDesc(classes) {
  $(".desc").removeClass("active");
  $(classes).addClass("active");
}

//updates hour by removing active class and adding active class
function updateHour(classes) {
  $(".hr").removeClass("active");
  $(classes).addClass("active");
}

//textClock runs at 1 second interval
setInterval(function () {
  textClock();
}, 1000);

//run textClock function
textClock();

//run globe
initGlobe();
