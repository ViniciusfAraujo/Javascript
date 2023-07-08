// return
//retorna um valor
//termina a função
//console.log => exibi o resultado na tela
function soma (a, b){
    return a + b
}
console.log(soma(4 ,5));

console.log('-------------------------------');

function criaPessoa(nome, sobrenome){
    return {nome, sobrenome}
}

const p1 = criaPessoa('Vinicius', 'Araujo')
const p2 = {
    nome: 'Milena',
    sobrenome : 'França'
}
console.log(p1);
console.log(p2);

console.log('-------------------------------');

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto
    }
    return falaResto
}
const fala = falaFrase('Ola')
const resto = fala('Mundo!')
console.log(resto);

console.log('-------------------------------');

function criarMultiplicador(multiplicador){
    return function (n) {
        return n * multiplicador
    }
}
const duplica = criarMultiplicador(2)
const triplica = criarMultiplicador(3)
const quadriplica = criarMultiplicador(4)
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));