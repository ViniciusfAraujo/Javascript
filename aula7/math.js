let num1 = 9

let num2 = Math.floor(45.52)//arredonda numero para baixo
let num3 = Math.ceil(56.59) //arredonda o numero para cima
let num4 = Math.round(20.50)  //50 pra cima arredonda o numero pra cima, 49 arredonda pra baixo
console.log(Math.max(1,2,3,4, 110, -18, -8, 200, 6, 7, 350)); //retornar o maior valor 
console.log(Math.min(1,2,3,4, 110, -18, -8, 200, 6, 7, 350)); //retornar o menor valor da sequencia
console.log(Math.random()); //gera uma sequencia de numeros aleatorios entre 0. .. e 1
//const aleatorio = Math.round(Math.random() * (10 -5) + 5) numeros aleatorios entre 0 e 1 sendo que o um nao é incluido
console.log(num2);
console.log(num3);
console.log(num4);

console.log('--------------------------------------');
function numAleatorio(min, max){
    const aleatorio = parseInt(Math.random() * (max - min) + min)
    return(
        aleatorio
    )
}
console.log(numAleatorio(1, 10));
