"use strict";
async function obtenerUsuarios() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const usuarios = await response.json();
        return usuarios;
    }
    catch (error) {
        console.error("Ocurrió un error:", error);
        return [];
    }
}
async function main() {
    const usuarios = await obtenerUsuarios();
    usuarios.forEach(usuario => {
        console.log(`Nombre: ${usuario.name} - Email: ${usuario.email}`);
    });
}
main();
