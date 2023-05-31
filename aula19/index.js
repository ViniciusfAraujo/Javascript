/*
Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiado
*/

let a = "A"
let b = a //Cópia
console.log(a, b);

a = 'Ola'
console.log(a,b);



/*
Referencia (mutavel) array, object, function - passado por referencia
*/

let c = [1, 2, 3]
let d = c
console.log(c,d);

c.push(4)
console.log(c,d);

d.pop(4)
console.log(c,d);