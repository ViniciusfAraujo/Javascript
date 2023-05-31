/*
&& -> false && true -> false "o valor mesmo"
|| -> false || true -> vai retornar o valor verdadeiro

FALSY
false
0
'' "" ``
null/undefined
NaN
*/
console.log('luiz' && undefined && 'maria');

function falaOi(){
    return "oi"
}

let vaiExecutar = 'joao'

console.log(vaiExecutar && falaOi());
//---------------

const corUsuario = 'verde'
const corPadrao = corUsuario || 'preto'
console.log(corPadrao );
