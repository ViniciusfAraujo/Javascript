//Retorne a soma do dobro de todos os pares
// -> filtrar pares
// -> dobrar os valores
// -> reduzir (somar tudo)
const numeros = [50,10,3,6,2,7,9,11,33,22,67,17]
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor)

console.log(numerosPares);

//[ 50, 10, 6, 2, 22 ] pares
//[ 100, 20, 12, 4, 44 ] dobro
// -> 180 soma dos valores