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

const interruptor = document.querySelector('#tipo-mensaje');
const mensaje1 = document.querySelector('#mensaje-1');
const mensaje2 = document.querySelector('#mensaje-2');

interruptor.addEventListener('change', () => {
  if (interruptor.checked) {
    mensaje1.classList.add('d-none');
    mensaje2.classList.remove('d-none');
  } else {
    mensaje1.classList.remove('d-none');
    mensaje2.classList.add('d-none');
  }
});


const form = document.querySelector('#search-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const searchInput = document.querySelector('#search-input');
  const searchString = searchInput.value.toLowerCase();
  const asesorCards = document.querySelectorAll('.col-md-3');
  for (let card of asesorCards) {
    const zona = card.querySelector('.card-text').textContent.toLowerCase();
    if (zona.includes(searchString)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  }
});
