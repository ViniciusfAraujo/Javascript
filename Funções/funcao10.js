//function generation => Geradores são funções cuja execução pode ser interrompida e posteriormente reconduzida. Seus contextos (de associações de variáveis) ficarão salvos entre cada recondução.
function* gerador1(){
    //Códigos qualquer...
    yield 'Valor 1';
    //Códigos qualquer...
    yield 'Valor 2';
    //Códigos qualquer...
    yield 'Valor 3';
}

const g1 = gerador1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next() );

console.log('-------------------------');

//gerador com loop infinito
function* gerador2(){
    let i = 1

    while(true){
        yield i
        i++
    }
}
const g2 = gerador2()
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log('-------------------------');

function* gerador3(){
    yield 1;
    yield 2;
    yield 3;
}

function* gerador4(){
    yield* gerador3()
    yield 4;
    yield 5;
    yield 6;
}

const g4 = gerador4()
for(let valor of g4){
    console.log(valor);
}

console.log('-------------------------');


function* gerador5(){
    yield function(){
        console.log('Vim do y1');
    }

    yield function(){
        console.log('vim do y2');
    }

    //.....

    yield function(){
        console.log('vim do y3');
    }
}

const g5 = gerador5()
const func1 = g5.next().value
const func2 = g5.next().value
const func3 = g5.next().value
func1()
func2()
func3()


