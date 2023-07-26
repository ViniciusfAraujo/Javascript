const aluno = ['Vinicius', 'Milena', 'Jose']

aluno.splice(1, 0, 'Carlos'); //O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
console.log(aluno)


console.log(typeof aluno); //O operador typeof retorna uma string indicando o tipo de um operando.
console.log(aluno instanceof Array); //O operador instanceof testa se um objeto tem, em seu prototype, a função construtora.


aluno.push('gabriel') //O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
aluno.push('Maria')


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

//* Comentario Importante
//!Isso esta errado, não ultilizar
//?Estou com duvida nesse codigo