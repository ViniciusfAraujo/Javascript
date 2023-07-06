// A palavra ARGUMENTS sustenta todos os argumentos enviado 
function funcao(a, b, c){
    //console.log(arguments[4]);
    let total = 0 
    for(let argumento of arguments){
        total += argumento
    }
    console.log(total, a, b, c);
}
funcao(1,2,3,4,5,6,7)
console.log('-------------------------------');

function funcao1(a,b,c,d,e,f){
    console.log(a,b,c,d,e,f,);
}
funcao1(1,2,3,)

console.log('-------------------------------');

function soma(a, b = 2, c = 4){
    console.log(a + b + c);
}
soma(2, undefined, 20)

console.log('-------------------------------');

//Função via destruturação object
function funcao2({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
let obj = {nome:'Vinicius', sobrenome:'Araujo', idade: 23}
funcao2(obj)

console.log('-------------------------------');

//Função via destruturação array
function funcao3([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}
funcao3(['Vinicius', 'Araujo', 23])

console.log('-------------------------------');

const conta = function(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero
        if(operador === '-') acumulador -= numero
        if(operador === '/') acumulador /= numero
        if(operador === '*') acumulador *= numero
    }
    console.log(acumulador);
}
conta('+', 1, 10, 20, 30, 40, 50)