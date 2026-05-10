const input = document.getElementById('input');
const boton = document.getElementById('boton');
const resultados = document.getElementById('resultados');
const error = document.getElementById('error');

const obtenerLibros = async (busqueda) => {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(busqueda)}`;
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    const libros = data.docs.map((libro) => ({
        title: libro.title,
        author_name: libro.author_name
            ? libro.author_name[0]
            : 'Autor desconocido',
        image: libro.cover_i
            ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`
            : 'imagenes/no-cover.png'
    }));

    return libros;
};

const validarInput = () => {

    if (input.value.trim() === '') {
        return false;
    }

    return true;
};

const crearElementoLibro = (libro) => {
    const libroHTML = document.createElement('div');
    libroHTML.classList.add('col-12');
    libroHTML.classList.add('col-sm-6');
    libroHTML.classList.add('col-md-4');
    libroHTML.classList.add('col-lg-3');
    libroHTML.classList.add('mt-4');

    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('h-100');
    card.classList.add('shadow');

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = libro.image;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.classList.add('d-flex');
    cardBody.classList.add('flex-column');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.innerText = libro.title;

    const text = document.createElement('p');
    text.classList.add('card-text');
    text.innerText = libro.author_name;

    const botonVerMas = document.createElement('a');
    botonVerMas.classList.add('btn');
    botonVerMas.classList.add('btn-secondary');
    botonVerMas.classList.add('mt-auto');
    botonVerMas.href = 'libro.html';
    botonVerMas.innerText = 'Ver más';

    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(botonVerMas);

    card.appendChild(img);
    card.appendChild(cardBody);
    libroHTML.appendChild(card);

    return libroHTML;
};


const mostrarLibros = async () => {

    if (!validarInput()) {
        error.textContent = 'Por favor, ingresa un libro válido.';
        return;
    }

    error.textContent = '';
    resultados.innerHTML = `
        <p class="text-center w-100">Cargando...<p>
    `;

    try {
        const libros = await obtenerLibros(input.value);
        resultados.innerHTML = '';
        if (libros.length === 0) {
            error.textContent = 'No se encontraron libros.';
            return;
        }

        for (const libro of libros.slice(0, 12)) {

            resultados.appendChild(
                crearElementoLibro(libro)
            );
        }

    } catch (err) {

        resultados.innerHTML = '';

        error.textContent = `
            Error al obtener libros: ${err}
        `;
    }
};

boton.addEventListener('click', mostrarLibros);