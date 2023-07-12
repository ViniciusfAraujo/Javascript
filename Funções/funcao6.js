// IFEE => Immediately invoked function expression
// Essa função precisa está dentro de parentes e cria uma função anonima
(function(idade, peso, altura){

    const sobrenome = 'Araujo'
    function criaNome(nome){
        return nome + ' ' + sobrenome
    }

    function falaNome(){
        console.log(criaNome('Vinicius'));
    }
    falaNome()
    console.log(idade, peso, altura);

})(23, 80, 1.90)