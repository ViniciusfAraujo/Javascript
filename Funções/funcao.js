// Declaração de função (Function hoisting)
function falaOi(){
    console.log('Oie');
}
falaOi()

//First-class objects (Objetos de primeira classe)
//Function expression
const souUmDado = function(){
    console.log('Sou um dado');
}
souUmDado()
/*
function executarFuncao(funcao){
    console.log('Vou executar a função a baixo');
    funcao()
}
executarFuncao(souUmDado)
*/

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma Arrow Function');
}
funcaoArrow()

//Função dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando...');
    }
}
obj.falar()