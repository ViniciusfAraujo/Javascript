//O loop for...of percorre objetos iterativos (en-US) (incluindo Array, Map, Set, o objeto arguments (en-US) e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

const nome = ['Vinicius', 'Ferreira', 'Araujo',]

for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}
console.log('<--------------------------->')

for(let i in nome){
    console.log(nome[i]);
}
console.log('<--------------------------->')

for(let valor of nome){
    console.log(valor);
}
console.log('<--------------------------->')

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
})
console.log('<--------------------------->')


//For classico - Geramente com iteráveis (array, strings)
//For in - Retorna o índice ou chave (string, array ou objetos)
//For of - Retorna o valor em si(iteráveis, array ou strings)
