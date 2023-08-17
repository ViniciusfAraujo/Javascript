// new Object -> Object.prototype
const objA = {
    chaveA: "A"
    //__proto__: Object.prototype
}

const objB = {
    chaveB: 'B'
    //__proto__: objB
}

const objC = new Object;
objC = "C"

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

console.log(objB.chaveA);