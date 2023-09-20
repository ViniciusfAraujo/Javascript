function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(false)
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, tempo)
    })
}


// Promise.all promise.race promise.resolve promise.reject
const promise = [
    //'Primeiro valor',
    esperaAi('promise 1', 3000),
    esperaAi('promise 2', 500),
    esperaAi('promise 3', 1000),
    //'otro valor'
]

Promise.race(promise)
.then(valor => {
    console.log(valor);
}).catch(erro => {
    console.log(erro);
})


