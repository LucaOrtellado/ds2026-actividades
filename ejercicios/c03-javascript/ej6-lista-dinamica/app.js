const producto = document.querySelector('#producto');
const boton = document.querySelector('#agregar');
const lista = document.querySelector('#lista');
const cantidad = document.querySelector('#cantidad');

boton.addEventListener('click', () => {
    const nomProducto = producto.value.trim();
    
    if (nomProducto === "") {
        alert("Por favor, ingresa el nombre de un producto.");
        return;
    }

    const elem = document.createElement('li');
    elem.textContent = nomProducto + " ";

    const Eliminar = document.createElement('button');
    Eliminar.textContent = 'Eliminar';

    Eliminar.addEventListener('click', () => {
        elem.remove();
        cantidad.textContent = lista.children.length;
    });

    elem.appendChild(Eliminar);

    lista.appendChild(elem);

    producto.value = '';

    cantidad.textContent = lista.children.length;
    
});