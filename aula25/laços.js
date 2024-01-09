// 1.for
for(let i = 5; i >= 1; i--){
    if(i % 2 !== 0){
        console.log(i)
    }   
}
/*
for(let i = 1; i <= 5; i++){
    console.log('Estou aprendendo!', i)
}
*/

console.log('-----------------');

// 2.while
let i = 5

while (i >= 1){
    if(i % 2 !== 0){
        console.log(i)
    } 
    i--;  
}


let cont = 1
while(cont <= 5){
    console.log('Estou aprendendo!', cont)
    cont++
}

console.log('-----------------');

// 3. dow.hile
let b = 0
do{
    console.log('digitnado', b)
    b++
} while(b <= 5)


console.log('-----------------');

// 4. for.in
const pessoa = {
    nome: "vinicius",
    idade: 23
}
for(let chave in pessoa){
    console.log(chave,pessoa['nome']);
}

const cores = ['vermelho','verde','azul']
for(let indice in cores){
    console.log(indice,cores[indice]);
}

console.log('-----------------');

// 5. for.of