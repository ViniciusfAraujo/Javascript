//Escrever uma função chamada ePaisagem que
// recebe dois argumentos, largura e altura
// de uma imagen (number)
//Retorne true se a imagen estiver no modo
// paisagem

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1920, 1080));

/*
function ePaisagem(largura, altura){
    return largura > altura //? true : false
}
console.log(ePaisagem(1920, 1080));
*/



/*
function ePaisagem(largura, altura){
    if(largura > altura){
        return (true)
    }else{
        return(false);
    }
}
console.log(ePaisagem(1080, 1920));
*/