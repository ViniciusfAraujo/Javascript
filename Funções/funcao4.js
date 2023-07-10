//closures
let scope = 'Escopo global'
function checkscope(){
    let scope = 'Escopo local'
    function f(){
        console.log(scope);
    }
    return f()
}
checkscope()

console.log('-------------------------------------------');

function retornaFuncao (nome){
    return function(){
        return nome
    }
}
const funcao = retornaFuncao('Vinicius')
const funcao2 = retornaFuncao('Araujo')
console.log(funcao(), funcao2());


