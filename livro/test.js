/*
function distance(x1, y1, x2, y2){
    let dx = x2 - x1
    let dy = y2 - x2
    return(Math.sqrt(dx*dx + dy*dy))
}
console.log(distance(4,3,2,1))
*/
console.log('<----------------------------------->');
/*
function hypotenuse(a, b) {
    function square(x) {
        return x*x
    }
    return Math.sqrt(square(a) + square(b))
}
console.log(hypotenuse(5,1));
*/

let o = {
    m: function(){
        var self = this;
        console.log(this === o);
        f()

        function f () {
            console.log(this === o);
            console.log(self === o);
        }
    }
}
o.m()