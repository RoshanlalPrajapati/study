//typewrier effect

const text = document.querySelector(".sec-text")
const textLoad = () =>{
  setTimeout(() => {
    text.textContent = "BETTER" 
    text.style.color= "#4070f4" 
  }, 0);
  setTimeout(() => {
    text.textContent = "IN 3D"
    text.style.color= "#ffcb00"
  }, 4000);
  setTimeout(() => {
    text.textContent = "IN REAL"
    text.style.color= "rgb(22, 22, 150)" 
  }, 8000);
}
textLoad()
setInterval(textLoad, 12000)

//dark mode
function changeMode(){
    var element = document.body
    element.classList.toggle('dark-mode')
}

// play pause button
var video = document.getElementById("myVideo");
var video = document.getElementById("firstVideo");
var btn = document.getElementById("myBtn");
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
