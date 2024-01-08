//Arrays bidimensionais e multidimensionais
let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];

function printMatrix(myMatrix) {
    for (let i = 0; i < myMatrix.length; i++) {
        for (let j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);
        }
    }
}
console.table(averageTemp)
    
console.log('<------------------->');

const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
    matrix3x3x3[i] = []; // precisamos inicializar cada array
        for (let j = 0; j < 3; j++) {
            matrix3x3x3[i][j] = [];
                for (let z = 0; z < 3; z++) {
                    matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}

for (let i = 0; i < matrix3x3x3.length; i++) {
    for (let j = 0; j < matrix3x3x3[i].length; j++) {
        for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
            console.log(matrix3x3x3[i][j][z]);
        }
    }
}
    