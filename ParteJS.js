// 1. CAPTURAR EL PRODUCTO SELECCIONADO EN EL FORMULARIO
// Buscamos el elemento modal de nuestra página
const modalPedidoElemento = document.getElementById('modalPedido');

if (modalPedidoElemento) {
  // Escuchamos el evento de Bootstrap cuando el modal se está por abrir
modalPedidoElemento.addEventListener('show.bs.modal', function (evento) {
    // Detectamos el botón exacto que hizo clic el usuario
    const botonDisparador = evento.relatedTarget;
    
    // Extraemos el nombre del producto que guardamos en el atributo 'data-producto'
    const nombreProducto = botonDisparador.getAttribute('data-producto');
    
    // Buscamos el contenedor del título en el formulario y le inyectamos el nombre
    const textoTituloProducto = document.getElementById('producto-seleccionado');
    textoTituloProducto.textContent = nombreProducto;
});
}

// 2. CAPTURAR LOS DATOS Y INTERACTUAR CUANDO SE ENVÍA EL FORMULARIO
const formularioPedido = document.getElementById('formPedido');

if (formularioPedido) {
formularioPedido.addEventListener('submit', function(evento) {
    // Evitamos que la página se recargue por defecto al enviar
    evento.preventDefault();
    
    // Capturamos los valores que completó el cliente en los campos
    const producto = document.getElementById('producto-seleccionado').textContent;
    const cliente = document.getElementById('nombreCliente').value;
    const color = document.getElementById('colorProducto').value;
    const metros = document.getElementById('metrosCuadrados').value;
    
    // Emitimos una alerta interactiva con JavaScript confirmando el pedido
    alert(`¡Muchas gracias ${cliente}!\nHemos registrado tu pedido de ${metros} m² de "${producto}" en color ${color}.\nNos comunicaremos a la brevedad.`);
    
    // Limpiamos los campos del formulario para que quede vacío nuevamente
    formularioPedido.reset();
    
    // Cerramos la ventana emergente automáticamente usando el componente de Bootstrap
    const modalInstancia = bootstrap.Modal.getInstance(modalPedidoElemento);
    modalInstancia.hide();
});
}