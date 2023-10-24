function partition(values, left, right) {
  const pivot = values[left];
  let i = left;

  for (let j = left + 1; j <= right; j++) {
      if (values[j] <= pivot) {
          i++;
          swap(values, i, j);
      }
  }

  // Troca o pivot (values[left]) com i.
  swap(values, left, i);

  return i;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Exemplo de uso:
const arr = [3, 6, 2, 8, 5, 1];
const left = 0;
const right = arr.length - 1;
const pivotIndex = partition(arr, left, right);
console.log(arr); // O array estará parcialmente ordenado em relação ao pivot
console.log(`O índice do pivot é ${pivotIndex}`);

console.log('<----------------------->');

// function quickSort(values, left, right) {
//   if (left < right) {
//       const indexPivot = partition(values, left, right);
//       quickSort(values, left, indexPivot - 1);
//       quickSort(values, indexPivot + 1, right);
//   }
// }

// // A função partition (já fornecida na resposta anterior) deve estar definida neste código.

// // Exemplo de uso:
// // const arr = [3, 6, 2, 8, 5, 1];
// // const left = 0;
// // const right = arr.length - 1;

// quickSort(arr, left, right);
// //console.log(arr); // O array estará ordenado
