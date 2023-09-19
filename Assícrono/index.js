// Promises
function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('Conexão com DATABASE', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando os dados da BASE', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Tratando os dados da BASE', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(resposta => {
        console.log('Exibindo dados na tela.');
    })
    .catch()

