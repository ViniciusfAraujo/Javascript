// Criando classes
/*
Classes em JavaScript são introduzidas no ECMAScript 2015 e são simplificações da linguagem para as heranças baseadas nos protótipos. A sintaxe para classes não introduz um novo modelo de herança de orientação a objetos em JavaScript.

Uma classe é um conjunto de características e comportamentos que definem o conjunto de objetos pertencentes à essa classe. Repare que a classe em si é um conceito abstrato, como um molde, que se torna concreto e palpável através da criação de um objeto. Chamamos essa criação de instanciação da classe, como se estivéssemos usando esse molde (classe) para criar um objeto.
*/ 

//*Linguagens verdadeiramente de POO não realizam a prototipação em segundo plano.

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
