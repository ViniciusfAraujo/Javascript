let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// Reverse() método inverte a ordem dos elementos dentro do array e retorna o array modificado com os elementos na ordem inversa.
number.reverse()

// O sort() método permite classificar os elementos de um array no local. Além de retornar o array ordenado, o sort()método altera as posições dos elementos do array original.
// Por padrão, o sort()método classifica os elementos da matriz em ordem crescente, com o menor valor primeiro e o maior valor por último.
// O sort() método converte elementos em strings e compara as strings para determinar os pedidos.
// number.sort()
// number.sort((a, b) => a - b)
function compare(a ,b){
    if(a < b){
        return -1
    }if(a > b){
        return 1
    }
    return 0
}

// number.sort(compare)
console.log(number.sort(compare));

console.log('----------------------');

//Ordenação personalizada
const amigos = [
    {name: 'Vinicius', idade: 30},
    {name: 'Milena', idade: 25},
    {name: 'Ana', idade: 20},
]

function comparePessoas(a, b){
    if(a.idade < b.idade){
        return -1
    }if(a.idade > b.idade){
        return 1
    }
    return 0
}

console.log(amigos.sort(comparePessoas));