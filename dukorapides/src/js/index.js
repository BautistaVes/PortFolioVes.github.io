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

document.getElementById('main').hidden = true;

var vid = document.getElementById('video');

document.addEventListener('click', function () {
	document.getElementById('enter').hidden = true;

	document.getElementById('main').hidden = false;

	if (typeof window.orientation == 'undefined') { 
		vid.play();
	}
});

vid.onended = function () {
	vid.play();
};
