class Filme {
    constructor(titulo, ano, genero){
        this.titulo = titulo,
        this.ano = 0,
        this.genero = genero,
        this.diretor = diretor,
        this.atore = [],
        this.duracao = 0 
    }

    Reproduzir(){
        console.log('Reproduzindo ...');
    }

    Pausar(){
        console.log('Pausado ||');
    }

    Avançar(){
        console.log('Avançar >>');
    }

    Fechar(){
        console.log('Fechar x');
    }
}

//const f1 = new Filme('Mãos taletosas', 2009, 'Drama', 'Tomas Carter', ['Cuba Gooding', 'Kimberly', 'Aunjanue', 'Guy Van'], 130)

const vigadores = new Filme()

vigadores.Reproduzir()