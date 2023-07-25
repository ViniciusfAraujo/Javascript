//Revisão de ARRAY
const nome = ['Vinicius', 'Milena', 'Ana']
nome[2] = 'Jose'
//delete nome[1] 
console.log(nome);

console.log('---------------------------------');

const nomes = ['Eduardo', 'Melissa', 'Gabriel']
const novo = [...nome]

const removido = novo.pop()// Remove elementos do final

nomes.push('Carlos')// Adiciona elementos no final da variavel 

//nomes.shift() //Remove  o elemnto do começo


console.log(nomes.length); //Comprimento da ARRAY
console.log(nomes);
console.log(novo, removido);

console.log('---------------------------------');


const nome1 = ['Vinicius', 'Milena', 'Ana','Eduardo', 'Melissa', 'Gabriel']
const novo1 = nome1.slice(1, -1)

console.log(novo1);

console.log('---------------------------------');


const nome2 = 'Vinicius Ferreira de Araujo'
const nomess = nome2.split(' ')
console.log(nomess);