const boton1 = document.getElementById("boton")as HTMLButtonElement;
const input1 = document.getElementById("numero") as HTMLInputElement;
const resultado1 = document.getElementById("Resultado") as HTMLPreElement;

boton1.addEventListener("click", () => {
    const altura = Number(input1.value);


    if (!altura || altura < 1) {
        resultado1.textContent = "Ingrese un número válido";
        return;
    }

    let arbol = "";

    for (let i = 1; i <= altura; i++) {
        for (let j = 0; j < i; j++) {
            arbol += "*";
        }
        arbol += "\n";
    }

    resultado1.textContent = arbol;
});
