//Captura o evento do submit
const form = document.querySelector('#form')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log("evento previnido");
    setResultado('OLa mundo')
})

function setResultado(msg){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
}