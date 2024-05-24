var botonesCarrito = document.querySelectorAll('.btn__grid');

botonesCarrito.forEach(function(botonesCarrito) {
    botonesCarrito.addEventListener('click', function() {
        // Muestra una alerta cuando se hace clic en cualquier botón
        alert('Agregado al carrito');
    });
});


//Codigo para cerrar y abrir el menu desplegable
const nav  = document.querySelector("#nav__js")
const abrir = document.querySelector("#btn__open__js")
const cerrar = document.querySelector("#btn__closed__js")

const cerrarMenu = () => {
    nav.classList.remove("nav__options--visible");
};


abrir.addEventListener("click" ,() =>{
    nav.classList.add("nav__options--visible")
})

cerrar.addEventListener("click" ,() =>{
    cerrarMenu()
})

const opcionesMenu = document.querySelectorAll(".nav__single__icon a")
opcionesMenu.forEach(opcion =>{
    opcion.addEventListener("click", () =>{
        cerrarMenu()
    })
})


//ESTO ES PARA CAMBIAR EL COLOR DE FONDO DE aerolineas__container
document.addEventListener('scroll', function() {
    const container = document.querySelector('.aerolineas__container');
    if (window.scrollY >  490) { 
        container.classList.add('scrolled');
    } else {
        container.classList.remove('scrolled');
    }

});

// Validacion del formulario con //
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevenir el envío del formulario
    event.preventDefault();
    
    // Limpiar errores previos
    limpiarErrores();

    // Variables para verificar errores
    let tienerrores = false;

    // Obtener valores de los campos
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const affair = document.getElementById('affair').value;
    const message = document.getElementById('message').value;

    // Validar nombre completo
    if (fullname.trim() === '') {
        setError('fullnameError', 'El nombre es obligatorio.');
        tienerrores = true;
    }

    // Validar email
    if (email.trim() === '') {
        setError('emailError', 'El email es obligatorio.');
        tienerrores = true;
    } else if (!validateEmail(email)) {
        setError('emailError', 'El email no es válido.');
        tienerrores = true;
    }

    // Validar teléfono
    if (tel.trim() === '') {
        setError('telError', 'El teléfono es obligatorio.');
        tienerrores = true;
    } else if (!validateTel(tel)) {
        setError('telError', 'El teléfono no es válido.');
        tienerrores = true;
    }

    // Validar asunto
    if (affair.trim() === '') {
        setError('affairError', 'El asunto es obligatorio.');
        tienerrores = true;
    }

    // Validar mensaje
    if (message.trim() === '') {
        setError('messageError', 'El mensaje es obligatorio.');
        tienerrores = true;
    }

    // Si no hay errores, enviar el formulario
    if (!tienerrores) {
        // Puedes agregar aquí el envío del formulario usando fetch o XMLHttpRequest
        alert('Formulario enviado correctamente');
        // O simplemente puedes descomentar la línea siguiente para permitir el envío:
        // this.submit();
    }
});

function setError(id, message) {
    document.getElementById(id).textContent = message;
}

function limpiarErrores() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.textContent = '');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateTel(tel) {
    const re = /^\d+$/;
    return re.test(String(tel));
}

