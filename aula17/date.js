//const horas = 60 * 60 * 3 * 1000
//const dia = 60 * 60 * 24 * 1000
//const data = new Date()
/*
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(data.toString());
console.log('<------------------>');
*/
function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroEsquerda(data.getDate())
    const mes = zeroEsquerda(data.getMonth())
    const ano = zeroEsquerda(data.getFullYear())
    const hora = zeroEsquerda(data.getHours())
    const min = zeroEsquerda(data.getMinutes())
    const seg = zeroEsquerda(data.getSeconds())
        return `${dia}/${mes}/${ano} ${hora}:${min}/${seg}`
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil); 