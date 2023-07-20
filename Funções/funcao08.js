//Na prática, muitas vezes você precisa criar muitos objetos semelhantes ao personobjeto.
//Para fazer isso, você pode usar uma função construtora para definir um tipo personalizado e o newoperador para criar vários objetos desse tipo.
//Tecnicamente falando, uma função construtora é uma função regular com a seguinte convenção:
//O nome de uma função construtora começa com uma letra maiúscula

function Pessoa(nome, sobrenome){ 
    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome
    this.metodo = () => {
        console.log(this.nome + ' Sou um método!');
    }
}
 const p1 = new Pessoa ('Vinicius', 'Araujo')
 const p2 = new Pessoa ('Milena', 'França')

p2.metodo()