const aluno = ['Vinicius', 'Milena', 'Jose']

aluno.splice(1, 0, 'Carlos');
console.log(aluno)


console.log(typeof aluno);
console.log(aluno instanceof Array);



aluno.push('gabriel')
aluno.push('luiza')

console.log(aluno.slice(0, 3)); // fatiar o elemento


aluno.shift() // tira o primeiro elemento da array
aluno.pop() //tira o ultimo elemento da array


aluno.push('Maria') //Adiciona um novo elemento no fim
aluno.unshift('Gabriel')//Adiciona um novo elemento no inicio


aluno[0] = 'Izabel'  //Alterando o indice 0
aluno[3] = 'Ana Paula' //ndice 3 criado com o valor ana paula, contento mais um elemento


//pelo indice acessa o valor
console.log(aluno);
console.log(aluno[0]);
console.log(aluno[2]);