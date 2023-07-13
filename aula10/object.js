//Objeto
const pessoa = {
    nome:'Vinicius',
    sobrenome: 'Araujo',
    idade: 23
}
console.log(pessoa.nome);

console.log('-----------------------------------');


//Função que retorna um objeto
function criaPessoa (nome, sobrenome, idade){
    return{
        nome,
        sobrenome,
        idade
    }
};
const pessoa1 = criaPessoa('Vinicius', 'Araujo', 23)
const pessoa2 = criaPessoa('Ana', 'Ferreira', 23)
const pessoa3 = criaPessoa('Milena', 'França', 23)
const pessoa4 = criaPessoa('Eduardo', 'Silva', 23)

console.log(pessoa1.nome, pessoa2.nome);

console.log('-----------------------------------');

//Objetos e funçoes
const pessoal = {
    nome:'Carlos',
    sobrenome:'Silva',
    idade: 30,

    fala(){
        console.log(`A minha Idade atual é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};
pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala()

