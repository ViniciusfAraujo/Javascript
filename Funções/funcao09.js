//Uma função recursiva é uma função que chama a si mesma até que não o faça. E essa técnica é chamada de recursão.
function recursiva(max){
    console.log(max);
    if(max >= 10)return;
    max++;
    recursiva(max)
}
recursiva(0)