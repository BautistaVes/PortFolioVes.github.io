let primerTitulo = document.title;



window.addEventListener("focus", () => {
  setInterval(titulo, 5000);
});

function titulo() {
  const estados = [
    "Duko",
    "Insano",
    "Mis redes",
    "𝐋𝐞𝐠𝐞𝐧𝐝𝐬",
    primerTitulo,
  ];
  const random = Math.floor(Math.random() * estados.length);
  document.title = estados[random];
}

window.addEventListener('load', function () {
    document.querySelector('.pre-loader').className += ' hidden';
});

var vido = document.getElementById("video")


vido.autoplay = true;
vido.load();

document.getElementById("video").play();

const video = document.getElementById("video");
video.addEventListener("play", handleFirstPlay(event), false);

let hasPlayed = false;
function handleFirstPlay(event) {
  if (!hasPlayed) {
    hasPlayed = true;

    // Remove listener so this only gets called once.
    const vid = event.target;
    vid.removeEventListener("play", handleFirstPlay(event));

    // Start whatever you need to do after first playback has started
  }
}
