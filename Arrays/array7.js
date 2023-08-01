//O forEach()método chama uma função para cada elemento em uma matriz.

/*
for(let valor of a1){
    console.log(valor);
}
*/
const a1 = [10, 20, 30]
a1.forEach(function(valor){
    console.log(valor);
})

console.log('---------------------')

//Outro exemplos
//Ultilizando FOR
let rank = ['A', 'B', 'C', 'D']
for(let indice = 0; indice < rank.length; indice++){
    console.log(rank[indice]);
}

console.log('---------------------')
//Usando forEach()
let rank1 = ['A', 'B', 'C', 'D']
rank1.forEach(function(e){
    console.log(e);
})