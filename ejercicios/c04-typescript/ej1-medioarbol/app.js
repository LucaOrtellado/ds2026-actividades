"use strict";
const boton = document.getElementById("boton");
const input = document.getElementById("numero");
const resultado = document.getElementById("Resultado");
boton.addEventListener("click", () => {
    const altura = Number(input.value);
    if (!altura || altura < 1) {
        resultado.textContent = "Ingrese un número válido";
        return;
    }
    let arbol = "";
    for (let i = 1; i <= altura; i++) {
        for (let j = 0; j < i; j++) {
            arbol += "*";
        }
        arbol += "\n";
    }
    resultado.textContent = arbol;
});
