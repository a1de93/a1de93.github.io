
// if current styling is *hidden* then change to visible, otherwise change to hidden
// document.querySelector(".index-body").style.position = document.querySelector(".index-body").style.position === 'unset' ? 'sticky' : 'unset';
// document.querySelector(".index-body").classList.toggle('no-scroll');

//navbar
const btn = document.querySelector(".btn");
btn.addEventListener("click",(event)=>{
  event.preventDefault();
  document.body.classList.toggle("active");
  document.querySelector("html").classList.toggle('no-scroll');
  document.querySelector("body").classList.toggle('no-scroll');
});


//loading animation screen
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(function() {
        loader.classList.add("loader-hidden");
        loader.addEventListener("transitioned", () => {
            document.body.removeChild("loader");
        })
    }, 2000);
})

//masonry grid for portfolio images
console.clear();
const elApp = document.querySelector("#app");
const elImages = Array.from(document.querySelectorAll(".gallery-image"));
const elDetail = document.querySelector(".detail");

function flipImages(firstEl, lastEl, change) {
  const firstRect = firstEl.getBoundingClientRect();
  const lastRect = lastEl.getBoundingClientRect();

  // INVERT
  const deltaX = firstRect.left - lastRect.left;
  const deltaY = firstRect.top - lastRect.top;
  const deltaW = firstRect.width / lastRect.width;
  const deltaH = firstRect.height / lastRect.height;

  change();
  lastEl.parentElement.dataset.flipping = true;

  const animation = lastEl.animate([
    {
      transform: `none` //translateX(${deltaX}px) translateY(${deltaY}px) scaleX(${deltaW}) scaleY(${deltaH})
    },
    {
      transform: 'none'
    }
  ], {
    duration: 600, // milliseconds
    easing: 'cubic-bezier(.2, 0, .3, 1)'
  });

  animation.onfinish = () => {
    delete lastEl.parentElement.dataset.flipping;
  }
}

elImages.forEach(figure => {
  figure.addEventListener("click", () => {
    const elImage = figure.querySelector('img');

    elDetail.innerHTML = "";

    const elClone = figure.cloneNode(true);
    elDetail.appendChild(elClone);

    const elCloneImage = elClone.querySelector('img');

    flipImages(elImage, elCloneImage, ()=>{
      elApp.dataset.state="detail";
    });

    function revert(){
      flipImages(elCloneImage, elImage, ()=>{
        elApp.dataset.state="gallery";
        elDetail.removeEventListener('click',revert);
      });
    }
    elDetail.addEventListener('click',revert);
  });
});

//toggle textclock and timezone clocks
function toggleClocks(){
  //get clock
  let textClock  = document.getElementsByClassName("container-fluid-textclock");
  let timezoneClock = document.getElementsByClassName("container-fluid-timezone");

  //get current value of the clock's display property
  let textClockDisplaySetting = textClock.style.display;
  let timezoneClockDisplaySetting = timezoneClock.style.display;

  setTimeout(() => {
    textClock.style.display = "none";
    timezoneClock.style.display = "none";
  }, 2000);
}
toggleClocks();