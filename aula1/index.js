var framework = 'Angular'
var framework = 'React'
console.log(framework);

let language = 'JavaScript'
language = 'Python'
console.log(language);

//Para tipos que não sejam objetos, como número, booleano ou até mesmo string, isso significa que não podemos modificar os valores das variáveis.
const cor = 'Azul'
//cor = 'verde'
 console.log(cor);

//Ao trabalhar com objetos, um const somente para leitura permite que as propriedades do objeto recebam novos valores 
const jsFramework = {
    name: 'React'
}
//const jsFramework = {
//    name: 'Vue'
//}
jsFramework.name = 'Angular' 
console.log(jsFramework);

console.log('<---------------------------->');

let movie = 'Lord of the Rings'; // {1}
//var movie = 'Batman v Superman'; // erro, movie já foi declarada
function starWarsFan() {
    const movie = 'Star Wars'; // {2}
    return movie;
}

function marvelFan() {
    movie = 'The Avengers'; // {3}
    return movie;
}

function blizzardFan() {
    const isFan = true;
    let phrase = 'Warcraft'; // {4}
    console.log('Before if: ' + phrase);

    if (isFan) {
        let phrase = 'initial text'; // {5}
        phrase = 'For the Horde!'; // {6}
        console.log('Inside if: ' + phrase);
    }
    phrase = 'For the Alliance!'; // {7}
    console.log('After if: ' + phrase);
}
console.log(movie); // {8}
console.log(starWarsFan()); // {9}
console.log(marvelFan()); // {10}
console.log(movie); // {11}
blizzardFan();