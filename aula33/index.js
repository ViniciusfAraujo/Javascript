const pessoa = {
    nome: 'Vinicius',
    sobrenome: 'Araujo',
    idade: 23,
    endereco: {
        rua: 'Av Paramaribo',
        numero: 15
    }
}

// Atribuição via destruturação
const {nome, ...resto} = pessoa
console.log(pessoa);