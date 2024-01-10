// Adicionando tipagem estática ao javascript
function multiplyNumber(x, y){
    return x * y
}

const resul = multiplyNumber(3, [1, 2])
console.log(resul); //NaN

// interface TemNome {
//     nome: string;
// }

// interface TemSobrenome {
//     nome: string;
// }

// class Aluno implements TemNome, TemSobrenome {
//     constructor(
//         public readonly: nome: string,
//         public readonly: sobrenome: string,
//         private readonly: idaade: string,
//     ){}
// }

// const aluno = new Aluno('Vinicius', 'Ferreira', 23)
// console.log(aluno);
// //Aluno {nome: 'Vinicius', sobrenome: 'Ferreira', idade: 23}
