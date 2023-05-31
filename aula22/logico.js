/*
Operadores logicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retorna true 
|| -> OR -> OU -> Todas as expressões precisam serem falsas para retorna false
 ! -> NOT -> NÃO -> 
*/ 
const expressaoAnd = true && true && false
const expressaoOr = true || true || false
const expressaoNot = !true
console.log(expressaoAnd);
console.log(expressaoOr);
console.log(expressaoNot);
//--------------------------

const usuario = "Vinicius" //form usuario digitou
const senha = "1234" //from usuario digitou
const vaiLogar = usuario === "Vinicius" && senha === "1234"
console.log(vaiLogar);