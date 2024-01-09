// Filter -> Semepre retorna um array, com a mesma quantidade de 
//elementos ou menos

// Retorne números maiores que 10
const numeros = [50,10,3,6,2,7,9,11,33,22,67,17]
const numerosFiltrados = numeros.filter(valor =>  valor > 10) //Function de callback
console.log(numerosFiltrados);

/*function callbackFilter(valor){
    return valor > 10   
}
*/
console.log('---------------------------------');

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com de 19 anos
//Retorne as pessoas cujo o nome termine com A
const pessoas = [
    {nome: 'Vinicius', idade:23},
    {nome: 'Ana', idade: 36},
    {nome: 'Milena', idade: 21},
    {nome: 'Maria', idade: 17},
    {nome: 'Rogerio', idade: 32},
    {nome: 'Joe', idade: 19},
]

const pessoas2 = pessoas.filter(obj => obj.nome.length > 5)
console.log(pessoas2);

const pessoaIdade = pessoas.filter(obj => obj.idade >= 19)
console.log(pessoaIdade);

const pessoaA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(pessoaA);