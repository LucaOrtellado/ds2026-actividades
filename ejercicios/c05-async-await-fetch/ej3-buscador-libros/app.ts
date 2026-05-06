interface Libro {
    title: string;
    author_name?: string[];
    first_publish_year?: number;
}
const input = document.getElementById("input-busqueda") as HTMLInputElement;
const boton = document.getElementById("btn-buscar") as HTMLButtonElement;
const resultados = document.getElementById("resultados") as HTMLDivElement;
const errorMsg = document.getElementById("error") as HTMLParagraphElement;

// Fetch a la API
async function buscarLibros(query: string): Promise<Libro[]> {
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);

    if (!response.ok) {
        throw new Error("Error");
    }

    const data = await response.json();
    return data.docs; 
}

function mostrarLibros(libros: Libro[]) {
    resultados.innerHTML = ""; 

    libros.slice(0, 10).forEach(libro => {
        const card = document.createElement("div");
        card.className = "card";

        const titulo = document.createElement("h3");
        titulo.textContent = libro.title;

        const autor = document.createElement("p");
        autor.textContent = libro.author_name
            ? `Autor: ${libro.author_name[0]}`
            : "Autor desconocido";

        const anio = document.createElement("p");
        anio.textContent = libro.first_publish_year
            ? `Año: ${libro.first_publish_year}`
            : "Año desconocido";

        card.appendChild(titulo);
        card.appendChild(autor);
        card.appendChild(anio);

        resultados.appendChild(card);
    });
}


boton.addEventListener("click", async () => {
    const texto = input.value.trim();

    if (texto === "") {
        errorMsg.textContent = "Por favor ingresá un texto";
        resultados.innerHTML = "";
        return;
    }

    try {
        errorMsg.textContent = "";

        const libros = await buscarLibros(texto);

        mostrarLibros(libros);

    } catch (error) {
        errorMsg.textContent = "Error al buscar libros";
    }
});