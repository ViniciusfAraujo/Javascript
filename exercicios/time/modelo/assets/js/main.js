function relogio(){
    
function horaDosSegundo(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

console.log(horaDosSegundo(10));

const relogio = document.querySelector('.relogio')
let segundo = 0
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundo++;
        relogio.innerHTML = horaDosSegundo(segundo) 
    }, 1000) 
}

document.addEventListener('click', function(e){
    const ele = e.target

    if(ele.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciaRelogio()
    }
    if(ele.classList.contains('pausar')){
        relogio.classList.add('pausado')
        clearInterval(timer)
    }
    if(ele.classList.contains('zerar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundo = 0
    }
})
}
relogio()

