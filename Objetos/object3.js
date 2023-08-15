//Construtora -> molded (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome
    //this.nomeCompleto = () => 'ORIGINAL' + this.nome + ' ' + this.sobrenome
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}

//instância
const pessoa1 = new Pessoa('Vinicius', 'Ferreira')
const pessoa2 = new Pessoa('Milena', 'França')

console.log(pessoa1);
console.log(pessoa2);

