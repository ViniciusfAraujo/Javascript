/*
//*Ja vimos
Object.kyes(retorna as chaves)
Object.freeze(congela o objeto)Um objeto congelado não pode mais ser alterado
Object.defineProperties(define várias propriedades)
Object.defineProperty(define uma propriedade)
*/ 

//O Object.values()método estático retorna uma matriz de valores de propriedade de chave de string enumeráveis ​​do próprio objeto.
const object2 = {
    nome: 'vinicius',
    idade: 23,
    altura: 1.9
}

console.log(Object.values(object2));

console.log('-------------------------------');

//Object.assign(des, any) método estático copia todas as propriedades próprias enumeráveis​​de um ou mais objetos de origem para um objeto de destino.
const target = {a:1, b:2}
const source = { b:4, c:5}

const returnedTarget = Object.assign({}, target)
console.log(target);

console.log('-------------------------------');

//Object.entries()
//método estático retorna uma matriz de pares de chave-valor de propriedade de chave de string enumeráveis ​​de um determinado objeto.

const object1 = {
    a: 'somestring',
    b: 42
}

for(const [chave, valor] of Object.entries(object1)){
    console.log(chave, valor);
}


const produto = { nome: 'coca-cola', preco: 7.9 }
for(let [chave, valor] of Object.entries(produto)){[
    console.log(chave, valor)
]}


console.log('-------------------------------');


//Object.getOwnPropertyDesvriptor(o, 'prop) método estático retorna um objeto que descreve a configuração de uma propriedade específica em um determinado objeto.

const produtos = {
    nome: 'notebook',
    preco: 3000
}
console.log(Object.getOwnPropertyDescriptor(produtos, 'nome'));



