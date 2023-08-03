const pessoas = {
    nome: 'Vinicius',
    sobrenome: 'Ferreira'
}

const chave = 'nome'
console.log(pessoas.nome);
console.log(pessoas['sobrenome']);
console.log(pessoas[chave]);

console.log('-----------------------');

const pessoa1 = new Object()
pessoa1.nome = 'Vinicius'
pessoa1.sobrenome = 'Araujo'
pessoa1.idade = 23
pessoa1.falarNome = function(){
    console.log(`${this.nome} está falando seu nome.`);
} 
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}

pessoa1.falarNome()
console.log(pessoa1.getDataNascimento());

console.log('-----------------------');

//factory functions / constructor functions / classes

//factory functions
function criarPessoas(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criarPessoas('Vinicius', 'Araujo')
console.log(p1.nomeCompleto);

console.log('-----------------------');

function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

const p2 = new Pessoa('Vinicius', 'Araujo')
const p3 = new Pessoa('Milena', 'França') 

console.log(p2);