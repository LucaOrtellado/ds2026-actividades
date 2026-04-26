export {};  
interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero: string;
}

let catalogo: Libro[] = [
    { isbn: '1', titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', precio: 2000, disponible: true, genero: 'Fantasía' },
    { isbn: '2', titulo: 'Crimen y castigo', autor: 'Fiódor Dostoyevski', precio: 2200, disponible: true, genero: 'Novela psicológica' },
    { isbn: '3', titulo: 'Los juegos del hambre', autor: 'Suzanne Collins', precio: 1800, disponible: false, genero: 'Distopía' },
    { isbn: '4', titulo: 'Drácula', autor: 'Bram Stoker', precio: 1700, disponible: true, genero: 'Terror' },
    { isbn: '5', titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', precio: 1300, disponible: true, genero: 'Fábula' },
    { isbn: '6', titulo: 'It', autor: 'Stephen King', precio: 2500, disponible: false, genero: 'Terror' },
    { isbn: '7', titulo: 'La ladrona de libros', autor: 'Markus Zusak', precio: 2100, disponible: true, genero: 'Drama' },
    { isbn: '8', titulo: 'Sapiens', autor: 'Yuval Noah Harari', precio: 2300, disponible: true, genero: 'Ensayo' }
];

const buscarPorAutor = (autor: string): Libro[] => {
    return catalogo.filter(libro => libro.autor.toLowerCase() == autor.toLowerCase());
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

 const renderizar = (libros: Libro[]): void => {
    const ul = document.querySelector('#listado') as HTMLElement;
    const stats = document.querySelector('#stats') as HTMLElement;

    ul.innerHTML = "";

    for (let i = 0; i < libros.length; i++){
        const libro = libros[i];

        const li = document.createElement('li');
        li.textContent = libro.titulo + ' - ' + libro.autor + ' - $' + libro.precio;

        ul.appendChild(li);
    }
    const cantidad = libros.length;
    const promedio = precioPromedio(libros);

    stats.textContent = 'Cantidad: ' + cantidad + ' | Promedio: $' + promedio;
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