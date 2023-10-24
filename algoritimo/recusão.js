/*
function contagemRegressiva(tempo) {
    for (let i = tempo; i >= 0; i--) {
      setTimeout(function() {
        if (i === 0) {
          console.log("Tempo esgotado!");
        } else {
          console.log(i);
        }
      }, (tempo - i) * 1000);
    }
}
  
// Exemplo de uso: inicie uma contagem regressiva de 5 segundos
contagemRegressiva(5);
*/

//Um método ou função sera recursivo se ele puder chamar a si mesmo diretamente ou indiretamente. EX: 
//function recursive(someParam){
  //  recursive(someParam)
//}

//function recursive1(param){
   // recursive2(param)
//}
/*
function standRecursion(underStandRecursion){
    const recursionAnwer = console.log('Do you recursion?')

    if(recursionAnwer === true){
        return true
    }
    standRecursion(recursionAnwer)
}
*/

//Fatorial interativo
function fatorialInterativo(number){
    if(number < 0) return undefined
    let total = 1
    for(let n = number; n > 1; n--){
        total = total * n
    }
    return total
}
console.log(fatorialInterativo(5));

console.log("<-------------->");

//Fatorial recursivo
function fatorialRecursivo(n){
    if(n === 1 || n === 0){
        return 1 //caso-base
    }
    return n * fatorialRecursivo(n - 1) //chamada recursiva
}

console.log(fatorialRecursivo(5));

