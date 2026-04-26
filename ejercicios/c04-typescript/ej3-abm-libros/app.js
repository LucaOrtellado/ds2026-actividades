"use strict";
let catalogo = [
    { isbn: '1', titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', precio: 2800, disponible: true, genero: 'Realismo mágico' },
    { isbn: '2', titulo: '1984', autor: 'George Orwell', precio: 1900, disponible: false, genero: 'Distopía' }
];
const buscarPorAutor = (autor) => {
    return catalogo.filter(libro => libro.autor.toLowerCase() === autor.toLowerCase());
};
const librosDisponibles = () => {
    return catalogo.filter(libro => libro.disponible);
};
const precioPromedio = (libros) => {
    let total = 0;
    for (const libro of libros) {
        total += libro.precio;
    }
    return total / libros.length;
};
const agregarLibro = (libro) => {
    catalogo[catalogo.length] = libro;
    renderizar(catalogo);
};
const eliminarLibro = (isbn) => {
    catalogo = catalogo.filter(l => l.isbn !== isbn);
    renderizar(catalogo);
};
const renderizar = (libros) => {
    const ul = document.querySelector('#listado');
    const stats = document.querySelector('#stats');
    ul.innerHTML = "";
    libros.forEach(libro => {
        const li = document.createElement('li');
        li.textContent = libro.titulo + ' - ' + libro.autor + ' - $' + libro.precio;
        const Eliminar = document.createElement('button');
        Eliminar.textContent = "Eliminar";
        Eliminar.onclick = () => eliminarLibro(libro.isbn);
        li.appendChild(Eliminar);
        ul.appendChild(li);
    });
    const cantidad = libros.length;
    const promedio = cantidad > 0 ? precioPromedio(libros) : 0;
    stats.textContent = `Cantidad: ${cantidad} | Promedio: $${promedio.toFixed(2)}`;
};
const input = document.querySelector('#filtroAutor');
const Filtrar = document.querySelector('#filtrar');
const Disponibles = document.querySelector('#mostrarDisponibles');
const Todos = document.querySelector('#mostrarTodos');
Filtrar.addEventListener('click', () => {
    const resultado = buscarPorAutor(input.value);
    renderizar(resultado);
});
Disponibles.addEventListener('click', () => {
    renderizar(librosDisponibles());
});
Todos.addEventListener('click', () => {
    renderizar(catalogo);
});
const validarFormulario = () => {
    const titulo = document.querySelector('#titulo');
    const autor = document.querySelector('#autor');
    const precio = document.querySelector('#precio');
    const disponible = document.querySelector('#disponible');
    const genero = document.querySelector('#genero');
    if (!titulo.value || !autor.value || Number(precio.value) <= 0) {
        return null;
    }
    const nuevoLibro = {
        isbn: "AUTO-" + Date.now(),
        titulo: titulo.value,
        autor: autor.value,
        precio: Number(precio.value),
        disponible: disponible.checked,
        genero: genero.value
    };
    return nuevoLibro;
};
const Agregar = document.querySelector('#btnAgregar');
const errorDiv = document.querySelector('#errorForm');
Agregar.addEventListener('click', () => {
    const nuevo = validarFormulario();
    if (nuevo === null) {
        errorDiv.textContent = "Error: Todos los campos son obligatorios y el precio debe ser > 0";
        errorDiv.style.color = "red";
    }
    else {
        errorDiv.textContent = "";
        agregarLibro(nuevo);
        document.querySelector('#formLibro').reset();
    }
});
renderizar(catalogo);
