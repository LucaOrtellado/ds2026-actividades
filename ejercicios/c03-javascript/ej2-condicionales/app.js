const ClasificarNota = (Nota) =>{
    if (Nota<4 && Nota>=0){
        return `Desaprobado ${Nota}`;
    }
    else if (Nota>=4 && Nota<8){
        return `Aprobado ${Nota}`;
    }
    else if (Nota>=8 && Nota<=10){
        return `Promocion ${Nota}`;
    }
    else {
        return `Nota Incorrecta ${Nota}`;
    }
}

function diaDeLaSemana(numero) {
    switch (numero) {
        case 1: return 'Lunes';
        case 2: return 'Martes';
        case 3: return 'Miércoles';
        case 4: return 'Jueves';
        case 5: return 'Viernes';
        case 6: return 'Sábado (fin de semana)';
        case 7: return 'Domingo (fin de semana)';
        default: return 'Número de día inválido';
    }
}

console.log(ClasificarNota(1));
console.log(ClasificarNota(5)); 
console.log(ClasificarNota(9)); 
console.log(ClasificarNota(11));
console.log(ClasificarNota(-1));

console.log(diaDeLaSemana(1));
console.log(diaDeLaSemana(3));
console.log(diaDeLaSemana(6));
console.log(diaDeLaSemana(225));
