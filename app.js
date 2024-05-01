var botonesCarrito = document.querySelectorAll('.btn__grid');

botonesCarrito.forEach(function(botonesCarrito) {
    botonesCarrito.addEventListener('click', function() {
        // Muestra una alerta cuando se hace clic en cualquier botón
        alert('Agregado al carrito');
    });
});
