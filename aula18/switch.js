//SWITCH => A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula case, e executa as instruções associadas ao case.

const data = new Date()
let diaSemana = data.getDay()
let diaSemanaTexto;

switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo'
        break;
    case 1:
        diaSemanaTexto = 'Segunda'
        break;
    case 2:
        diaSemanaTexto = 'Terça'
        break;
    case 3:
        diaSemanaTexto = 'Quarta'
        break;
    case 4:
        diaSemanaTexto = 'Quinta'
        break;
    case 5:
        diaSemanaTexto = 'Sexta'
        break;
    case 6:
        diaSemanaTexto = 'Sabado'
        break    ;    
}

console.log( diaSemanaTexto);