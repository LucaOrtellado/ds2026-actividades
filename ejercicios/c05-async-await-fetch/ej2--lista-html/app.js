"use strict";
async function obtenerUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`ERROR: ${response.status}`);
        }
        const usuarios = await response.json();
        return usuarios;
    }
    catch (error) {
        console.error('Error al obtener usuarios:', error);
        throw error;
    }
}
function mostrarUsuarios(usuarios) {
    const listado = document.getElementById("lista-usuarios");
    usuarios.forEach(usuario => {
        const li = document.createElement("li");
        li.textContent = `${usuario.name} - ${usuario.email}`;
        listado.appendChild(li);
    });
}
async function main() {
    const loading = document.getElementById("loading");
    const error = document.getElementById("error");
    try {
        loading.style.display = "block";
        const usuarios = await obtenerUsuarios();
        loading.style.display = "none";
        mostrarUsuarios(usuarios);
    }
    catch (e) {
        loading.style.display = "none";
        error.textContent = "Error al cargar usuarios";
    }
}
main();
