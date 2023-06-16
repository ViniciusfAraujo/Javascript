/*
console.log('linha 0');
console.log('linha 1');
console.log('linha 2');
console.log('linha 3');
console.log('linha 4');
console.log('linha 5');
*/

// i - index
for(let i = 0; i <= 5; i++){
    console.log(`Linha ${i}`);
}

//---------------------------------------------
for(let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par' : 'impar'
    console.log(i, par);
}

//---------------------------------------------
const fruta = ['maça', 'pera', 'uva', 'melancia', 'goiaba', 'morango']
//console.log(fruta.length); comprimento do array

for(let i = 0; i < fruta.length; i++){
    console.log(`Indice ${i}`, fruta[i])
}