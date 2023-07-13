//A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

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

console.log('--------------');

for(let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par' : 'impar'
    console.log(i, par);
}

console.log('--------------');

const fruta = ['maça', 'pera', 'uva', 'melancia', 'goiaba', 'morango']
//console.log(fruta.length); comprimento do array
for(let i = 0; i < fruta.length; i++){
    console.log(`Indice ${i}`, fruta[i])
}