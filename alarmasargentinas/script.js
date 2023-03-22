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
const mensaje1 = document.querySelector('#botontarjeta');
const mensaje2 = document.querySelector('#botoncbu');

interruptor.addEventListener('change', () => {
  if (interruptor.checked) {
    mensaje1.classList.add('d-none');
    mensaje2.classList.remove('d-none');
  } else {
    mensaje1.classList.remove('d-none');
    mensaje2.classList.add('d-none');
  }
});






// Animación de entrada del modal
var tl = gsap.timeline({defaults: {duration: 0.5}});
tl.from('.modal-dialog', {y: '-100%', ease: 'back.out(1.7)'});

// Animación de salida del modal
$('#exampleModal').on('hidden.bs.modal', function () {
  tl.reverse();
});
  
  


const form = document.getElementById('miFormulario');
const vistaPrevia = document.getElementById('vista-previa');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que la página se recargue al enviar el formulario

  const formData = new FormData(form); // Crea un objeto FormData con los datos del formulario
  const formEntries = formData.entries(); // Convierte los datos del formulario a un array de pares clave-valor

  // Crea una lista con los datos del formulario
  let lista = '<ul>';
  for (const [clave, valor] of formEntries) {
    lista += `<li><strong>${clave}:</strong> ${valor}</li>`;
  }
  lista += '</ul>';

  // Crea el contenido HTML para la vista previa
  const contenidoHtml = `
    <h2>Confirmación de envío</h2>
    <p>Por favor revise la información antes de enviar el formulario:</p>
    ${lista}
  `;

  vistaPrevia.innerHTML = contenidoHtml; // Imprime la vista previa en el div "vista-previa"
  
  form.submit(); // Envía el formulario
});