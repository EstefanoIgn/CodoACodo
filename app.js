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
    if (window.scrollY >  490) { // Cambia 50 por el valor que desees
        container.classList.add('scrolled');
    } else {
        container.classList.remove('scrolled');
    }
});