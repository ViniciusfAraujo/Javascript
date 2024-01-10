function buscaBinaria(arr, alvo) {
    let inicio = 0;
    let fim = arr.length - 1;

    while (inicio <= fim) {
      let meio = Math.floor((inicio + fim) / 2);
  
      // Verifica se o elemento no meio é o alvo
      if (arr[meio] === alvo) {
        return meio; // Elemento encontrado, retorna o índice
      }
  
      // Se o alvo for menor que o elemento no meio, ajusta a extremidade direita
      if (arr[meio] > alvo) {
        fim = meio - 1;
      } else {
        // Se o alvo for maior, ajusta a extremidade esquerda
        inicio = meio + 1;
      }
    }
  
    // Se o elemento não for encontrado, retorna -1
    return -1;
  }
  
  // Exemplo de uso
  const arrayOrdenado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const alvo = 6;
  
  const resultado = buscaBinaria(arrayOrdenado, alvo);
  
  if (resultado !== -1) {
    console.log(`O elemento ${alvo} foi encontrado no índice ${resultado}.`);
  } else {
    console.log(`O elemento ${alvo} não foi encontrado no array.`);
  }
  
  