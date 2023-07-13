let velocidade = 200
let velocidadeMaxima = 80

if(velocidade <= velocidadeMaxima){
    console.log("Nao levou multa");
}else if(velocidade > velocidadeMaxima && velocidade <= velocidadeMaxima + 10){
    console.log('Levou multa leve');
}else if(velocidade >= velocidadeMaxima + 11 && velocidade <= velocidadeMaxima + 20 ){
    console.log('Levou multa grave');
}else if(velocidade > velocidadeMaxima + 20){
    console.log('Levou multa gravissima');
}