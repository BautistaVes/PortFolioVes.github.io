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



  // Selecciona el switch
  function mostrarOpciones2() {
    var opciones2 = document.getElementById("page5");
    if (opciones2.style.display === "none") {
      opciones2.style.display = "block";
    } else {
      opciones2.style.display = "none";
    }
  }
  function mostrarOpciones() {
    var opciones = document.getElementById("opciones");
    if (opciones.style.display === "none") {
      opciones.style.display = "block";
    } else {
      opciones.style.display = "none";
    }
  }

  function mostrarcbu() {
    var opciones2 = document.getElementById("opciones2");
    var opciones = document.getElementById("opciones");
    if (opciones.style.display === "none") {
      opciones2.style.display = "block";
    } else {
      opciones.style.display = "none";
    }
  }

// Animación de entrada del modal
var tl = gsap.timeline({defaults: {duration: 0.5}});
tl.from('.modal-dialog', {y: '-100%', ease: 'back.out(1.7)'});

// Animación de salida del modal
$('#exampleModal').on('hidden.bs.modal', function () {
  tl.reverse();
});
  
  


const form = document.getElementById('form');
const summary = document.getElementById('summary');
const editBtn = document.getElementById('editBtn');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  // capturar valores de cada campo del formulario
  const nameValue = form.elements['nombre'].value;
  const emailValue = form.elements['documento'].value;
  const phoneValue = form.elements['celular'].value;
  const messageValue = form.elements['email'].value;
  const direccion = form.elements['direccion'].value;
  const entrecalles = form.elements['entrecalles'].value;
  const provincia = form.elements['provincia'].value;
  const localidad = form.elements['localidad'].value;
  const codigop = form.elements['codigop'].value;
  const planes = form.elements['planes'].value;
  const cbu = form.elements['mensaje2'].value;
  const tipocc = form.elements['tipocc'].value;
  const vencimiento = form.elements['vencimiento'].value;
  const nombrecc = form.elements['nombrecc'].value;
  const numeroscc = form.elements['numeroscc'].value;
  
  // crear un resumen de los valores ingresados
  const summaryHTML = `
    <p><strong>Nombre:</strong> ${nameValue}</p>
    <p><strong>Email:</strong> ${emailValue}</p>
    <p><strong>Teléfono:</strong> ${phoneValue}</p>
    <p><strong>Mensaje:</strong> ${messageValue}</p>
  `;
  
  // agregar el resumen al elemento summary
  summary.innerHTML = summaryHTML;
  
  // mostrar el botón de editar
  editBtn.style.display = 'block';
  
  // ocultar el formulario
  form.style.display = 'none';
});

editBtn.addEventListener('click', function() {
  // mostrar el formulario de nuevo
  form.style.display = 'block';
  
  // ocultar el botón de editar
  editBtn.style.display = 'none';
  
  // borrar el resumen
  summary.innerHTML = '';
});