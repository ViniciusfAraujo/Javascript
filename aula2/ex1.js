const nome = "Vinicius"
const sobrenome = "Araujo"
const idade = 23
const peso = 89
const altura = 1.90
let imc;
let anoNascimento;

imc = peso / (altura * altura)
anoNascimento = 2023 - idade

console.log(imc.toFixed(2));
console.log(anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos, ${peso} kg`);
console.log(`Tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);
