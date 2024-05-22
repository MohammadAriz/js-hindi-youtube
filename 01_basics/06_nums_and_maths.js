const score= 100
const number = new Number(100)
console.log(number.toString());
console.log(typeof number.toString());
console.log(number.toString().length);
console.log(number.toFixed(2));

let anotherNumber=100000;
console.log(anotherNumber.toLocaleString('en-IN'))

//MATH
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9))

console.log(Math.floor(Math.random()*10)+1)

let min= 10
let max =20
console.log(Math.floor(Math.random()*(max-min))+min)
