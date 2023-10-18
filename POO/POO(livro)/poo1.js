//GETTER E SETTER
class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    get nome(){
        return this._nome
    }
    set nome(valor){
        this._nome = valor
    }
}

const p1 = new Pessoa('vinicius')
console.log(p1.nome);
p1.nome = 'marcos'
console.log(p1.nome);
p1.nome = 'luiz'
console.log(p1.nome);