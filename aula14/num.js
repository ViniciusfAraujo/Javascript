let num1 = 10.1;
let num2 = 2.5;


console.log(num1.toString() + num2) //Realiza uma conctençao pois num1 foi convertido com expressao toString, porem continua sendo um Number
num1 = num1.toString() //Troca o valor da variavel para uma string definida
console.log(num1.toString(2)) //retorna o valor do number em numeros binario 
console.log(num1.toFixed(2)); //acrescenta a quantidade de casas decimais do  valor
console.log(Number.isInteger(num1)); //retonar se o numero e true ou false inteira
let temp = num1 * 'ola';  console.log(Number.isNaN(temp));//retorna true sempre que a conta for invalida
