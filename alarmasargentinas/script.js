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



  // Selecciona el switch
  const switchBtn = document.querySelectorAll('input[name="options"]');

  // Agrega un evento "change" al switch
  switchBtn.forEach((btn) => {
    btn.addEventListener('change', (e) => {
      if (e.target.value === 'option1') {
        mensaje1.classList.remove('d-none');
        mensaje2.classList.add('d-none');
        console.log('Opción 1 seleccionada');
      } else if (e.target.value === 'option2') {
        mensaje1.classList.add('d-none');
        mensaje2.classList.remove('d-none');
        mensaje2.classList.add("d-block")
        mensaje1.classList.add("d-md-none")
      }
    });
  });