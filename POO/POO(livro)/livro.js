class Book{
    constructor(title, pages,isbn){
        this.title = title
        this.pages = pages
        this.isbn = isbn
    }
}

let book = new Book('Algoritmos', '50', 'isbn')
console.log(book);

console.log('<----------------------------->');

class RegistroAcademico{
    constructor(aluno, matricula, bolsista, anomatricula){
        this.aluno = aluno
        this.matricula = matricula
        this.bolsista = bolsista
        this.anomatricula = anomatricula
    }

}

let alu1 = new RegistroAcademico('Vinicius', 75364, true, 2015)
console.log(alu1);

console.log('<----------------------------->');

class Triangulo{
    constructor(lado1, lado2, lado3){
        this.lado1 = lado1
        this.lado2 = lado2
        this.lado3 = lado3
    }

    equilatero(){
        let igualdade12 = this.lado1 === this.lado2
        let igualdade23 = this.lado3 == this.lado3
        return igualdade12 && igualdade23
    }

    calculaPerimetro(){
        return this.lado1 + this.lado2 + this.lado3
    }
}

const tri = new Triangulo(3, 1, 2)
console.log(tri.equilatero());
console.log(tri.calculaPerimetro());

console.log('<----------------------------->');

class Fatorial {
    constructor(num){
        this.num = num
    }
  
    calcularFatorial() {
      if (this.num >= 0) {
        if (this.num <= 1) {
          console.log("\nResposta: 1");
        } else {
          let fator = this.num;
          while (this.num >= 2) {
            this.num = this.num - 1;
            fator = fator * this.num;
          }
          console.log(`\nResposta: ${fator}`);
        }
      } else {
        console.log("\nNúmero inválido!");
      }
    }
  }
  
const calc = new Fatorial(5)
console.log(calc.calcularFatorial());
  
console.log('<----------------------------->');

class Cliente{
  constructor(){
    this.nome = nome
    this.cpf = cpf
    this.endereco = endereço
  }

  realizaPedido(){

  }

  confirmaServico(){

  }

  realizaPagamento(){

  }
}
