/*
const h1 = document.querySelector('.container h1')
const data = new Date()

function getDiaSemanaTexto(diaSemana){
    let diasSemanas = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
    return diasSemanas[diaSemana]
}

function getNomeMes(numeroMes){
    let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[numeroMes]
}

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function criaDate(data){
    const diaSemana = data.getDay()
    const numeroMes = data.getMonth()

    const nomeDia = getDiaSemanaTexto(diaSemana)
    const nomeMes = getNomeMes(numeroMes)

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${zeroEsquerda(data.getFullYear())} ${zeroEsquerda(data.getHours())}:${data.getMinutes()}`
    )
}

h1.innerHTML = criaDate(data)
*/
const h1 = document.querySelector('.container h1')
const data = new Date()
let opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};
h1.innerHTML = data.toLocaleString('pt-BR', opcoes) + "<br>";
