//Concatenando array
const a1 = [1,2,3]
const a2 = [4,5,6]
//const a3 = a1.concat(a2, [7,8,9], 'Vinicius')
// ... rest -> ...spread                       array literal
const a3 = [...a1, 'Vinicius', ...a2, 7, 8, ...[9, 10]]
console.log(a3)