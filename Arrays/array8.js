const e = require("express");

const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

for(let i = 0; i < daysOfWeek.length; i++){
    console.log(daysOfWeek[i]);
}

console.log('----------------------------');

daysOfWeek.forEach(function(e){
    console.log(e);
})
//---------------------
const fibonacci = []
fibonacci[1] = 1
fibonacci[2] = 1

for(let i = 3; i < 20; i++){
    fibonacci[i] = fibonacci[ i - 1] + fibonacci[ i - 2]
}

for(let i = 1; i < fibonacci.length; i++){
    console.log(fibonacci[i]);
}