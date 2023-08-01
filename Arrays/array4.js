/*
O map()método chama uma função de retorno de chamada em cada elemento de uma matriz e retorna uma nova matriz que contém os resultados.
*/ 
const numeros = [50,10,3,6,2,7,9,11,33,22,67,17]
const dobro = numeros.map(valor => valor * 2)
console.log(dobro);

console.log('---------------------------------');

/*
Para cada elemento:
Retorne apenas uma string com o nome da pessoa
Remova apenas a chaves 'nome do objeto'
Adicione uma chave id em cada objeto
*/ 

const pessoas = [
    {nome: 'Vinicius', idade:23},
    {nome: 'Ana', idade: 36},
    {nome: 'Milena', idade: 21},
    {nome: 'Maria', idade: 17},
    {nome: 'Rogerio', idade: 32},
    {nome: 'Joe', idade: 19},
]

const nomes = pessoas.map(obj => obj.nome)
console.log(nomes);

const idades = pessoas.map(obj => ({idade: obj.idade}))
console.log(idades);

const ids = pessoas.map(function(obj, indice){
    obj.id = indice
    return obj
})
console.log(ids);