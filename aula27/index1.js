/*
try{
    //é executada quando não há erro
}catch(){
    //é executada quando há erro
}finally{
    //sempre
}
*/
/*
try{
    console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei um arquivo');
    console.log('Fechei um arquivo');

    try{
        console.log('b');
    }catch(err){
        console.log('Deu ERRO');
    }

}catch(err){
    console.log('Tratando o ERRO');
}finally{
    console.log('FINALLY: Eu sempre sou executado');
}
*/

function retornarHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de Date.')
    }

    if(!data){
        data = new Date()
    }

    return data. toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try{
    const data = new Date('01-01-1960 12:30:21')  
    const hora = retornarHora()
    console.log(hora)
}catch(err){
    //trata erro
}finally{
    console.log('Tenha um bom dia.');
}
