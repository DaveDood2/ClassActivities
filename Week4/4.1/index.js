let pac = document.getElementById("pacman");
let pacSize = 1;
function makePacALittleBigger() {
  pacSize++;
  pac.style.width = pacSize + "%";
}

setInterval(makePacALittleBigger, 1000);
