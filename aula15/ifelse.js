/*
Entre 0 - 11 - bom dia
Entre 12 - 17 - boa tarde
Entre 18 - 23 - boa noite
*/
// If pode ser ultilizado sozinho
// sempre que ultilizar a palavra else, é preciso de um if
// Pode ter varios else if na checagem
// So pode ter um else na checagem

const hora = 20

if(hora >= 0 && hora <= 11){
    console.log('Bom dia!');
}else if(hora >= 12 && hora <= 17){
    console.log('Boa tarde!');
}else if(hora >= 18 && hora <= 23){
    console.log('Boa Noite!');
}else{
    console.log("ERRO");
}