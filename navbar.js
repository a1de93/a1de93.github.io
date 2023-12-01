//navbar
const btn = document.querySelector(".btn");
        
btn.addEventListener("click",()=>{
    document.body.classList.toggle("active")
});

//loading animation screen
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(function() {
        loader.classList.add("loader-hidden");
        loader.addEventListener("transitioned", () => {
            document.body.removeChild("loader");
        })
    }, 2700);
})