//objeto
/* um objeto é uma coleção de propriedade, e uma propriedade é
uma associação entre um nome (ou chave) e um valor.
um valor de propriedade pode ser uma função, que é então considerada
uma método de objeto.
*/ 
let pessoa = {
    nome:"vinicius",
    idade:32,
    pets:["cachorro","tartaruga"],
    carros:{
        ferrari:{
            placa:"21345",
            cor:"preta"
        },
        celta:{
            placa:"121212",
            cor:'vermelho'
        }
    },
    andar: function(km){
        console.log(pessoa.nome+" andou "+km+" km ")
    }

}
//pessoa.nome = "Milena" rescreevendo o nome
pessoa.andar(20)

//console.log(pessoa.carros.ferrari.cor)
//console.log(pessoa.carros.uno.placa)  acessando uma propriedade   