const verdadeira = true

//let tem escopo de bloco { ... bloco }
// var so tem escopo de função
/*
let nome = 'luiz' //criando
var nome2 = 'luiz' // criando

if(verdadeira){
    let nome = 'otavio' //criando
    var nome2 = 'rogerio' //redeclarando

    if(verdadeira){
        var nome2 = 'ronaldo' //redeclarando
        let nome = 'outra coisa'
    }
}
console.log(nome, nome2);
*/
/*-------------------------------------------------*/ 

function falaOi(){
    var sobrenome = 'ferreira'

    if(verdadeira){
        let nome = 'vinicius'
        
    }
    
}
console.log(sobrenome);
falaOi()
