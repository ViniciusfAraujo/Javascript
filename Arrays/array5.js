/*
O Array.prototype permite que você reduza uma matriz a um único valor usando o reduce()método
*/ 
//Some todos os números(reduce)
const numeros = [50,10,3,6,2,7,9,11,33,22,67,17]
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor
    return acumulador
})
console.log(total);

console.log('---------------------------------');


const pessoas = [
    {nome: 'Vinicius', idade:23},
    {nome: 'Ana', idade: 36},
    {nome: 'Milena', idade: 21},
    {nome: 'Maria', idade: 17},
    {nome: 'Rogerio', idade: 32},
    {nome: 'Joe', idade: 68},
]

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(maisVelha);

console.log('---------------------------------');

//Outros exemplos
//Calculando números de array usando FOR loop
let number = [1,2,3,4,5]
let sum = 0
for(let indice = 0; indice < number.length; indice++){
    sum += number[indice]
}
console.log(sum);
// Calculando números de array usando método Reduce()
let num = [1,2,3,4,5]
let soma = num.reduce(function(acumulador, valor){
    return acumulador += valor
})
console.log(soma);

console.log('---------------------------------');

let quantidadeProdutos = [
    {
        produto:'Celular',
        qtd: 5,
        preço: 1500
    },
    {
        produto:'Notebook',
        qtd: 3,
        preço: 3200
    },
    {
        produto:'Teclado',
        qtd: 25,
        preço: 599
    }
]

let totalProdutos = quantidadeProdutos.reduce(function(valorInteiro, valorAtual){
    return  valorInteiro + valorAtual.qtd * valorAtual.preço
}, 0)
console.log(totalProdutos); 

7500
9600