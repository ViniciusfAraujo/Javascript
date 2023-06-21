//                0       1       2
const frutas = ['uva', 'pera', 'morango']

/*
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
*/

// For in -> lê os indices ou chaves do objetos
for(let i in frutas){
    console.log(i);
}
//--------------------------------------------------

const pessoas = {
    nome: 'Vinicius',
    sobrenome: 'Araujo',
    idade: 23
}

for(let chave in pessoas){
    console.log(chave, pessoas[chave]);
}