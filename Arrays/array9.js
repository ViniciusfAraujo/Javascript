//Acrescentando elementos
//  Indice       0  1  2  3  4  5  6  7  8  9
const numbers = [0, 1, 2, 3, 4, 5, 6, 7 ,8, 9]
numbers [numbers.length] = 10

//Método Push() => acrescenta
numbers.push(11)
numbers.push(12, 13)
console.log(numbers);

console.log('<--------------->');

//Inserindo um elemento na primeira posição
Array.prototype.insertFirstPosition = function(value){
    for(let i = this.length; i >= 0; i--){
        this[i] = this[i - 1]
    }
    this[0] = value
}
numbers.insertFirstPosition(-1);
console.log(numbers);
//Método unshift() => insere na primeira posicão do Array
numbers.unshift(-2)
numbers.unshift(-4, -3)
console.log(numbers);

console.log('<--------------->');

//Removendo elemento no final do array. Método pop()
numbers.pop()
console.log(numbers);
//console.log(numbers.length);

console.log('<--------------->');

//Removendo o elemento da primeira posição. Método shift()
numbers.shift()
console.log(numbers);

console.log('<--------------->');

// Adicionando e removendo elementos de uma posição específica
// splice(indice, delete, elem1, elem2, elem3)
numbers.splice(5, 3)
console.log(numbers);

//Adicionando
numbers.splice(5,0,2,3,4)
console.log(numbers);

