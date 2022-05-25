var video = document.getElementById("miVideo");
var btn = document.getElementById("miBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";

  } else {
      
    video.pause();
    btn.innerHTML = "Play";
  }
}