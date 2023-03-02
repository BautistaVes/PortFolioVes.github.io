let primerTitulo = document.title;

window.addEventListener("focus", () => {
  setInterval(titulo, 5000);
});

function titulo() {
  const estados = [
    "Alarmas Argentinas",
    "Seguridad",
    "Protege tu casa",
    "Proteccion 24hs",
    "Contrataciones Alarmas",
    primerTitulo,
    "Alarmas Argentinas",
  ];
  const random = Math.floor(Math.random() * estados.length);
  document.title = estados[random];
}

var myCarousel = document.querySelector('#mySlider')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000 // Tiempo en milisegundos
})


