// quickSort função principal que será chamada para ordenar um array.
// Ela recebe o array a ser ordenado e uma função de comparação opcional (padrão é defaultCompare).
// Chama a função auxiliar quick com os parâmetros iniciais.
function quickSort(array, compareFn = defaultCompare){
  return quick(array, 0, array.length - 1, compareFn);
}


// quick é a função auxiliar responsável pela lógica de ordenação rápida (quick sort) recursiva.
// Verifica se há mais de um elemento no array para ordenar.
// Chama a função particao para obter o índice do pivô.
// Recursivamente chama a função quick para as sub-arrays à esquerda e à direita do pivô.
function quick(array, left, right, compareFn){
  let index;
  if (array.length > 1){
    index = particao(array, left, right, compareFn);

    if (left < index - 1){
      quick(array, left, index - 1, compareFn);
    }
    if (index < right){
      quick(array, index, right, compareFn);
    }
  }
  return array;
}


// particao realiza a partição do array com base em um pivô.
// O pivô é escolhido como o elemento no meio do array.
// Utiliza dois índices (i e j) para percorrer o array, movendo-os em direção ao centro.
// Troca elementos quando necessário para garantir que os elementos menores que o pivô estejam à esquerda e os maiores à direita.
function particao(array, left, right, compareFn){
  const pivot = array[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  while (i <= j){
    while (compareFn(array[i], pivot) === Compare.LESS_THAN){
      i++;
    }
    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN){
      j--;
    }
    if (i <= j){
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

// defaultCompare é uma função de comparação padrão. Ela compara dois elementos e retorna um valor indicando se são iguais, se o primeiro é menor ou se o primeiro é maior.
// Compare é uma enumeração usada para representar os resultados de comparação.
function defaultCompare(a, b) {
  return a === b ? Compare.EQUAL : (a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN);
}

const Compare = {
  LESS_THAN: -1,
  EQUAL: 0,
  BIGGER_THAN: 1,
};

// Função para trocar elementos de posição no array
function swap(array, a, b){
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

console.log(quickSort([3, 5, 1, 6, 4, 7, 2]));
