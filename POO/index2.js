class DispositivoEletronico {
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' ja Ligado');
            return
        }
        this.ligado = true
    }

    desligado(){
        if(!this.ligado){
            console.log(this.ligado + 'Desligado');
            return
        }
        this.ligado = false
    }
}

//Herança
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome)

        this.cor = cor
        this.modelo = modelo
    }
}

const s1 = new Smartphone('IPHONE', 'Preto', 'Iphone 14')
s1.ligar()
console.log(s1);

console.log('-------------------------------');

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome)
        this.temWifi = temWifi
    }

    ligar(){
        console.log('Olha, voce alterou o método ligar.');
    }
}

const t1 = new Tablet('ipad', true)
t1.ligar()
console.log(t1);

console.log('-------------------------------');


