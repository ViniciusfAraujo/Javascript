//Constructor function => retorna um objeto

function Pessoa(nome, sobrenome){
    //Atributos ou métodos privados
    const ID = 12345;
    const metodoINterno = function(){

    }

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