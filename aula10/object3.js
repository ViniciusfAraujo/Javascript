let amigo = {
    nome: 'jose', 
    sexo: 'M', 
    peso: 85.4, 
        engorda(p=0){
            console.log('Engordou')
             this.peso += p
}}
amigo.engorda(3)
console.log(`${amigo.nome} pesa ${amigo.peso}`)