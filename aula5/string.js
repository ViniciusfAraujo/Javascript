let umaString = 'Um texto'

console.log(`${umaString} em um lindo dia`);
console.log(umaString.indexOf('texto')); //O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
console.log(umaString.match(/[a-z]/)); //O método match() retorna uma correspondência entre uma string com uma expressão regular.
console.log(umaString.slice(3, 8)); //O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é incluído) de um array original. 