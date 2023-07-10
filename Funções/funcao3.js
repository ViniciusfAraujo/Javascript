// escopo léxico // Closures
const nome = 'Vinicius'
function falaNome(){
    //const nome = 'Araujo'
    console.log(nome);
}
function usaFalaNome(){
    const nome = 'Araujo'
    falaNome()
}
usaFalaNome()

console.log('-------------------------------------------');

let escopo = 'global'
function checkEscopo() {
    let escopo = 'local'
    console.log(escopo);
}
checkEscopo()

console.log('-------------------------------------------');

let scope = 'Escopo global'
function checkEscopo1(){
    let scope = 'Escopo local'
    function aninhada(){
        let scope = 'Escopo aninhado'
        console.log(scope);
    }
    return aninhada()
}
checkEscopo1()