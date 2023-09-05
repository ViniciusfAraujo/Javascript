// Criando classes
/*
Classes em JavaScript são introduzidas no ECMAScript 2015 e são simplificações da linguagem para as heranças baseadas nos protótipos. A sintaxe para classes não introduz um novo modelo de herança de orientação a objetos em JavaScript.
*/ 

//*Linguagens verdadeiramente de POO não realizam a prototipação em segundo plano - anote isso em algum lugar.

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome,
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }
}

const p1 = new Pessoa('Vinicius', 'Ferreira')
p1.falar();

console.log('-------------------------');

//Function Constructor
function Pessoa2(nome, sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando`);
}

const p2 = new Pessoa2('Milena', 'França')
p2.falar()

console.log('-------------------------');

//O método constructor é um tipo especial de método para criar e iniciar um objeto criado pela classe. Só pode existir um método especial com o nome "constructor" dentro da classe.

class Retangulo {
    constructor(altura, largura){
        this.altura = altura,
        this.largura = largura
    }

    get area(){
        return this.calculaArea()
    }

    calculaArea(){
        return this.altura * this.largura
    }
}

const quadrado = new Retangulo(10,10)
console.log(quadrado.area);
