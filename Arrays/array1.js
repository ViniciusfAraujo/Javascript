//               -5       -4       -3        -2        -1
//  Indice        0        1        2         3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia']
// splice(indice, delete, elem1, elem2, elem3)
const removido = nomes.splice(4,1)
console.log(nomes, removido);

// Simulando pop()
//const removido = nomes.splice(-1,1)

//shift()
//const removido = nomes.splice(0,1)

//push()
//const removido = nomes.splice(nomes.length, 0, 'Vinicius')

//unshift()
//const removido = nomes.splice(0, 0, 'Vinicius')
