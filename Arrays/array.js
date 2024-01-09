//Revisão de ARRAY
//Uma ARRAY é uma variável especial, que pode conter mais de um valor:
//Uma matriz pode conter muitos valores sob um único nome e você pode acessar os valores referindo-se a um número de índice.
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
const novo1 = nome1.slice(1, -1) // Método extrai uma parte de uma string e a retorna como uma substring. O slice()método possui dois parâmetros opcionais starte end

console.log(novo1);

console.log('---------------------------------');


const nome2 = 'Vinicius Ferreira de Araujo'
const nomess = nome2.split(' ') //O split()divide uma string em uma matriz de substrings.
console.log(nomess);