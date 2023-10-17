// Exemplos de Arrow functions
/*
let circuloArea = function circuloArea(r){
    let PI = 3.14
    let area = PI * r * r
    return area 
}

console.log(circuloArea(4));
*/

const circuloArea = (r) => {
    let PI = 3.14
    let area = PI * r * r
    return area 
} 
console.log(circuloArea(4));

console.log('<----------------------->');

let params = [4,6,1]
function sum(x = 1, y = 2, z = 3){
    return x + y+ z
}
console.log(sum(...params));

console.log('<----------------------->');

function restParamaterFunction(x, y, ...a){
    return (x + y) * a.length;
}
console.log(restParamaterFunction(1 , 2, 'hello', true, 7));