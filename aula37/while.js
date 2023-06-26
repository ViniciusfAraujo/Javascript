// Laço while 
const nome = 'Vinicius'
let i = 0

while(i <= nome.length){
    console.log(nome[i]);
    i++
}

console.log('<----------------------------------------->');
/*
function random(min, max){
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const min = 1
const max = 50
let rand = random(1, 50)

while(rand !== 10){
    rand = random(min, max)
    console.log(rand);
}
*/

//while(inicio <= 20){
//    console.log(inicio);
//    inicio++
//}

let inicio = 1
do{
    console.log(inicio);
    inicio++
}while(inicio <= 20)