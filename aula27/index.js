//tratando e laçando ERROR
//let naoExisto = true
/*
try{
    console.log(naoExisto);
} catch(err){
    console.log('naoExisto não existe' );
    console.log(err);
}
*/

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x e y precisa ser um numero')
    }
    return x + y
}

try{
   console.log(soma(1,3));
   console.log(soma('1', 4)); 
} catch(error){
    console.log(error);
}