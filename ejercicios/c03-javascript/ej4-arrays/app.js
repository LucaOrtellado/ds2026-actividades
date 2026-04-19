const numeros = [5,4,3,2,1,6,7,8];
let suma=0;
for(const numero of numeros){
    suma += numero;
}
console.log(`La suma es ${suma}`);

const promedio = suma/numeros.length;
console.log(`El promedio es ${promedio}`);

let mayor = numeros[0];
for (const numero of numeros){
    if (numero > mayor){
        mayor = numero;
    }
}
console.log(`El numero mayor es ${mayor}`);

let menor = numeros[0];
for (const numero of numeros){
    if (numero < menor){
        menor = numero;
    }
}
console.log(`El numero menor es ${menor}`);

function generarAteriscos(n){
    let asterisco = "";
    for (let i=0; i<n; i++){
        asterisco += "*";
    }
    return asterisco;
}

console.log(`${generarAteriscos(8)}`);
console.log(`${generarAteriscos(1)}`);
console.log(`${generarAteriscos(3)}`);
console.log(`${generarAteriscos(0)}`);
