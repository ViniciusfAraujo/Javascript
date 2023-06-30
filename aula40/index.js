function mostraHora(){
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const time = setInterval(() => {
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(time)
}, 3000)

setTimeout(function(){
    console.log('Olá Mundo!');
}, 5000)