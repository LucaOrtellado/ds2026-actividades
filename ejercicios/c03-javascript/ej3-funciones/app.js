const calcularPrecioFinal = (monto,medioPago) =>{
    let precFinal;
    if (monto<200 && monto>0){
        precFinal = monto;
    }
    else if (monto<400 && monto>=200){
        if (medioPago=="E"){
            precFinal = monto * 0.7;
        }
        else if (medioPago=="D"){
            precFinal = monto * 0.8;
        }
        else if (medioPago=="C"){
            precFinal = monto * 0.9;
        }
    }
    else if (monto>=400){
        precFinal = monto * 0.6;
    }
    if (medioPago === "E") {
        return `Monto: ${monto}$ | Pago: E | Precio Final: ${precFinal}$`;
    }
    else if (medioPago === "D") {
        return `Monto: ${monto}$| Pago: D | Precio Final: ${precFinal}$`;
    }
    else if (medioPago === "C") {
        return `Monto: ${monto}$ | Pago: C | Precio Final: ${precFinal}$`;
    }
    
}

console.log(calcularPrecioFinal(150, "D"));
console.log(calcularPrecioFinal(250, 'D'));
console.log(calcularPrecioFinal(350, "E"));
console.log(calcularPrecioFinal(450, 'E'));
console.log(calcularPrecioFinal(350, "C"));
console.log(calcularPrecioFinal(450, "C"));