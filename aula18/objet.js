//Objeto
const pessoa = {
    nome:'Vinicius',
    sobrenome: 'Araujo',
    idade: 23
}
console.log(pessoa.nome);




//Função que retorna um objeto
function criaPessoa (nome, sobrenome, idade){
    return{
        nome,
        sobrenome,
        idade
    }
};
const pessoa1 = criaPessoa('Vinicius', 'Araujo', 23)
const pessoa2 = criaPessoa('Ana', 'Araujo', 23)
const pessoa3 = criaPessoa('Milena', 'Araujo', 23)
const pessoa4 = criaPessoa('Eduardo', 'Araujo', 23)

console.log(pessoa1.nome, pessoa2.nome);



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

