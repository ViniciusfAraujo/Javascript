/*
A async function declaração cria uma ligação de uma nova função assíncrona a um determinado nome. A awaitpalavra-chave é permitida no corpo da função, permitindo que o comportamento assíncrono e baseado em promessas seja escrito em um estilo mais limpo e evitando a necessidade de configurar explicitamente cadeias de promessas.
*/

function rand(min=0, max=3){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           if(typeof msg !== 'string') {
            reject('CAI NO ERRO')
            return 
           }

            resolve(msg.toUpperCase() + ' - Passei na promise')
            return
        }, tempo)
    })
}

/*
esperaAi('Fase 1', rand())
    .then(valor => {
        console.log(valor);
        return esperaAi('fase 2', rand())
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('fase 3', rand())
    })
    .then(fase => {
        console.log(fase);
        return fase
    }).then(fase => {
        console.log('Terminamos na fase', fase);
    })
    .catch(err => console.log(err))
*/

async function executar(){
    try{
        const fase1 = await esperaAi('fase 1', rand())
        console.log(fase1);
        const fase2 = await esperaAi('fase 2', rand())
        console.log(fase2);
        const fase3 = await esperaAi('fase 3', rand())
        console.log(fase3);

        console.log('Terminamos na fase', fase3);
    }catch(err){
        console.log(err);
    }
}
executar()