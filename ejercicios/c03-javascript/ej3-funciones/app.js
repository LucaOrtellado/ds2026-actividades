const calcularPrecioFinal = (monto, medioPago) => {
    if (monto <= 0) {
        return "El monto debe ser mayor a 0";
    }

    let precFinal;
    if (monto < 200) {
        precFinal = monto;
    } else if (monto < 400) {
        if (medioPago === "E") {
            precFinal = monto * 0.7;
        } else if (medioPago === "D") {
            precFinal = monto * 0.8;
        } else if (medioPago === "C") {
            precFinal = monto * 0.9;
        } else {
            return "Medio de pago inválido (use E, D o C)";
        }
    } else {
        precFinal = monto * 0.6;
    }

    if (medioPago === "E" || medioPago === "D" || medioPago === "C") {
        return `Monto: ${monto}$ | Pago: ${medioPago} | Precio Final: ${precFinal}$`;
    }

    return "Medio de pago inválido (use E, D o C)";
};

console.log(calcularPrecioFinal(150, "D"));
console.log(calcularPrecioFinal(250, 'D'));
console.log(calcularPrecioFinal(350, "E"));
console.log(calcularPrecioFinal(450, 'E'));
console.log(calcularPrecioFinal(350, "C"));
console.log(calcularPrecioFinal(450, "C"));
