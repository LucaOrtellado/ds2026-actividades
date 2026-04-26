interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero: string;
}

let catalogo: Libro[] = [
    { isbn: '1', titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', precio: 2800, disponible: true, genero: 'Realismo mágico' },
    { isbn: '2', titulo: '1984', autor: 'George Orwell', precio: 1900, disponible: false, genero: 'Distopía'}
];

const buscarPorAutor = (autor: string): Libro[] => {
    return catalogo.filter(libro => libro.autor.toLowerCase() === autor.toLowerCase());
}

const librosDisponibles = (): Libro[] => {
    return catalogo.filter(libro => libro.disponible);
}

const precioPromedio = (libros: Libro[]): number => {
    let total=0;
    for (const libro of libros) {
        total += libro.precio;
    }
    return total / libros.length;
}

const agregarLibro = (libro: Libro): void => {
    catalogo[catalogo.length] = libro;
    renderizar(catalogo);
}

const eliminarLibro = (isbn: string): void => {
    catalogo = catalogo.filter(l => l.isbn !== isbn);
    renderizar(catalogo);
};

const renderizar = (libros: Libro[]): void => {
    const ul = document.querySelector('#listado') as HTMLElement;
    const stats = document.querySelector('#stats') as HTMLElement;
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

const input = document.querySelector('#filtroAutor') as HTMLInputElement;
const Filtrar = document.querySelector('#filtrar') as HTMLButtonElement;
const Disponibles = document.querySelector('#mostrarDisponibles') as HTMLButtonElement;
const Todos = document.querySelector('#mostrarTodos') as HTMLButtonElement;

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

const validarFormulario = (): Libro | null => {

    const titulo = document.querySelector('#titulo') as HTMLInputElement;
    const autor = document.querySelector('#autor') as HTMLInputElement;
    const precio = document.querySelector('#precio') as HTMLInputElement;
    const disponible = document.querySelector('#disponible') as HTMLInputElement;
    const genero = document.querySelector('#genero') as HTMLInputElement;

    if (!titulo.value || !autor.value || Number(precio.value) <= 0) {
        return null;
    }

    const nuevoLibro: Libro = {
        isbn: "AUTO-" + Date.now(),
        titulo: titulo.value,
        autor: autor.value,
        precio: Number(precio.value),
        disponible: disponible.checked,
        genero: genero.value
    };

    return nuevoLibro;
};

const Agregar = document.querySelector('#btnAgregar') as HTMLButtonElement;
const errorDiv = document.querySelector('#errorForm') as HTMLElement;

Agregar.addEventListener('click', () => {
    const nuevo = validarFormulario();

    if (nuevo === null) {
        errorDiv.textContent = "Error: Todos los campos son obligatorios y el precio debe ser > 0";
        errorDiv.style.color = "red";
    } else {
        errorDiv.textContent = ""; 
        agregarLibro(nuevo);
        
        (document.querySelector('#formLibro') as HTMLFormElement).reset();
    }
});

renderizar(catalogo);